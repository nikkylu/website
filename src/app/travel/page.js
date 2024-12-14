// "use client";

import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
// import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

// const stravaActivities = [
//   { id: "12173452807" },
//   { id: "12164584259" },
//   { id: "12157675374" }, 
// ];

const getPhotos = () => {
  const photosDirectory = path.join(process.cwd(), 'public/photos/travel');
  return fs.readdirSync(photosDirectory)
    .filter(file => !file.startsWith('.') && !file.endsWith('.DS_Store'))
    .map(file => `/photos/travel/${file}`);
};


export default function Travel() {
    const photos = getPhotos();
//   useEffect(() => {
//     // Dynamically inject the Strava embed script
//     const script = document.createElement('script');
//     script.src = 'https://strava-embeds.com/embed.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup the script on unmount
//       document.body.removeChild(script);
//     };
//   }, []);

  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <article className="prose prose-lg max-w-none text-primary">
          <h1 className="text-4xl font-bold mb-6">Travel</h1>

          <section className="mb-8">
            <p>Trying to put my experience into words. Will update when I have more time.</p>
            <p className='font-bold'>Aug 2024:</p>
            <p className='pl-8'>
              I spent the month backpacking the Nordic countries. I drove 1540km around Iceland and hiked
              Skogafoss.
            </p>
            <p className='font-bold'>July 2024:</p>
            <p className='pl-8'>
              Went to see art and had some good food in Hongkong.
            </p>
            <p className='font-bold'>May 2024:</p>
            <p className='pl-8'>
              I saw the Niagra Falls by bike from NYC in 7 days along the empire state trail.
            </p>
            <p className='font-bold'>March 2024:</p>
            <p className='pl-8'>
              Hiked my first live volcano Acatenango, Guatemala. Spent organic days around Lake Atitlan. 
            </p>
            <p className='font-bold'>Jan 2024:</p>
            <p className='pl-8'>
              Backpacked Patagonia, Chile. Woke up in the mountains on New Year's Day. Hiked high altitude in Cusco, Peru. Explored Valparaiso and Lima.
            </p>
            <p className='font-bold'>Aug 2023:</p>
            <p className='pl-8'>
              Went to Dublin following steps of James Joyce. Went to see Newton's apple tree in Cambridge. Saw performances at Edinburgh Fringe.
            </p>
            <p className='font-bold'>July 2023:</p>
            <p className='pl-8'>
              Chengdu, Chongqing, China. 山城。
            </p>
            <p className='font-bold'>May 2023:</p>
            <p className='pl-8'>
              Visiting UAL and CSM in London. Art museum visits.
            </p>
            <p className='font-bold'>May 2023:</p>
            <p className='pl-8'>
              Trip to Mexico City. Frida Kahlo's house. 
            </p>
            <p className='font-bold'>Jan 2023:</p>
            <p className='pl-8'>
              School sponsored trip to Berlin.
            </p>
            <p className='font-bold'>June 2022:</p>
            <p className='pl-8'>
              Swizerland, Germany, Netherland.
            </p>
            <p className='font-bold'>May 2022:</p>
            <p className='pl-8'>
              Went to Cannes film festival. Lived in Paris for 2 months.
            </p>


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {stravaActivities.map((activity, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg mx-auto"
                >
                  <div
                    className="strava-embed-placeholder"
                    data-embed-type="activity"
                    data-embed-id={activity.id}
                    data-style="summary"
                    data-from-embed="false"
                  ></div>
                </div>
              ))}
            </div> */}
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
                <div key={index} className="relative w-full overflow-hidden">
                <Image
                    src={photo}
                    alt={`Travel Photo ${index + 1}`}
                    layout="responsive"
                    width={3}
                    height={4}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                </div>
            ))}
            </div>
        </article>
      </div>
    </div>
  );
}
