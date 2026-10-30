"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import worldMapSvg from './worldMapSvg';

// ISO 3166-1 alpha-2 code -> number of visits, 'month' (stayed 4+ weeks), or 'lived'
const visits = {
  us: 'lived', // United States
  cn: 'lived', // China
  fr: 'month', // France (3 visits, incl. 4+ week stays)
  es: 'month', // Spain
  pe: 'month', // Peru
  it: 'month', // Italy
  jp: 3, // Japan
  de: 2, // Germany
  ch: 2, // Switzerland
  th: 2, // Thailand
  gb: 2, // United Kingdom
  am: 1, // Armenia
  ca: 1, // Canada
  cl: 1, // Chile
  dk: 1, // Denmark
  fi: 1, // Finland
  ge: 1, // Georgia
  gr: 1, // Greece
  gt: 1, // Guatemala
  is: 1, // Iceland
  ie: 1, // Ireland
  mx: 1, // Mexico
  ma: 1, // Morocco
  nl: 1, // Netherlands
  no: 1, // Norway
  sg: 1, // Singapore
  se: 1, // Sweden
  va: 1, // Vatican City (too small to show on the map, but it counts)
  pr: 1, // Puerto Rico (US territory — highlighted, not counted as a country)
};

// Countries only: Puerto Rico is a territory
const countryCount = Object.keys(visits).filter((c) => c !== 'pr').length;

// Sequential orange ramp, light -> dark (validated on the beige surface)
const RAMP = { 1: '#f0905c', 2: '#f4511e', 3: '#cf3f10', 4: '#9c2d06', 5: '#641d01' };
// Darker step of each for hover (CSS filter on SVG elements is broken in Safari)
const HOVER = { 1: '#d4743f', 2: '#c73d12', 3: '#a93109', 4: '#772104', 5: '#431300' };
const LABELS = { 1: '1 visit', 2: '2 visits', 3: '3+ visits', 4: 'stayed over a month', 5: 'lived' };
const bucketOf = (count) =>
  count === 'lived' ? 5 : count === 'month' ? 4 : Math.min(count, 3);

// Static per-country CSS so colors survive any re-render of the injected SVG
const mapCss = (() => {
  const byBucket = {};
  Object.entries(visits).forEach(([code, count]) => {
    (byBucket[bucketOf(count)] ??= []).push(code);
  });
  return Object.entries(byBucket)
    .map(([bucket, codes]) => {
      const sel = (suffix) =>
        codes.map((c) => `.visited-map #${c}${suffix}, .visited-map #${c}${suffix} path`).join(', ');
      return `${sel('')} { fill: ${RAMP[bucket]}; cursor: pointer; }
${sel(':hover')} { fill: ${HOVER[bucket]}; }`;
    })
    .join('\n');
})();

const countryName = (code) => {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code.toUpperCase());
  } catch {
    return code.toUpperCase();
  }
};

const mapStyles = `
  .visited-map svg { width: 100%; height: auto; display: block; }
  .visited-map path { fill: #dedbd3; stroke: #F5F4F1; stroke-width: 0.5; transition: fill 0.15s; }
  ${mapCss}
`;

export default function VisitedMap({ mini = false }) {
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const findCountry = (target) => {
      let el = target;
      while (el && el !== container) {
        if (el.id && /^[a-z]{2}$/.test(el.id)) return el;
        el = el.parentElement;
      }
      return null;
    };

    const showTooltip = (e) => {
      const country = findCountry(e.target);
      const count = country ? visits[country.id] : undefined;
      if (count !== undefined) {
        const rect = container.getBoundingClientRect();
        const detail =
          count === 'lived' ? 'lived' :
          count === 'month' ? 'stayed over a month' :
          `${count} visit${count > 1 ? 's' : ''}`;
        setTooltip({
          text: `${countryName(country.id)} — ${detail}`,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setTooltip(null);
      }
    };

    const handleLeave = () => setTooltip(null);

    container.addEventListener('mousemove', showTooltip);
    container.addEventListener('click', showTooltip); // tap on touch devices
    container.addEventListener('mouseleave', handleLeave);
    return () => {
      container.removeEventListener('mousemove', showTooltip);
      container.removeEventListener('click', showTooltip);
      container.removeEventListener('mouseleave', handleLeave);
    };
  }, [mini]);

  if (mini) {
    return (
      <Link href="/travel" aria-label="Countries I have visited — see Travel Log" className="block">
        <style>{mapStyles}</style>
        <div className="visited-map" dangerouslySetInnerHTML={{ __html: worldMapSvg }} />
      </Link>
    );
  }

  return (
    <div className="relative max-w-xl">
      <style>{mapStyles}</style>
      <div
        ref={containerRef}
        className="visited-map"
        dangerouslySetInnerHTML={{ __html: worldMapSvg }}
      />
      {tooltip && (
        <div
          className="absolute pointer-events-none bg-primary text-beige text-sm px-2 py-1 rounded shadow-md whitespace-nowrap"
          style={{ left: tooltip.x + 12, top: tooltip.y - 32 }}
        >
          {tooltip.text}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 text-sm text-primary/60">
        {[1, 2, 3, 4, 5].map((bucket) => (
          <span key={bucket} className="inline-flex items-center gap-1.5">
            <span className="inline-block w-3.5 h-3.5 rounded-sm" style={{ backgroundColor: RAMP[bucket] }} />
            {LABELS[bucket]}
          </span>
        ))}
        <span className="ml-auto">{countryCount} countries and counting.</span>
      </div>
    </div>
  );
}
