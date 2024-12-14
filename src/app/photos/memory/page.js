import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const getPhotos = () => {
  const photosDirectory = path.join(process.cwd(), 'public/photos/memory');
  return fs.readdirSync(photosDirectory)
    .filter(file => !file.startsWith('.') && !file.endsWith('.DS_Store'))
    .map(file => `/photos/memory/${file}`);
};

export default function Photos() {
  const photos = getPhotos();

  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/photos" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back 
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-primary">As We Left, and Walk into Memories (2023, 2024)</h1>
        <p className="pl-8  text-primary">
            As We Left, and Walk into Memories documents the organic reconvergence with the house Nikky lived in as 
            a child before 2010. Everything used 12 years ago was still untouched and kept in its 'original' condition. 
            There was dust that accumulated over the years and cloth that dampened due to lack of maintenance. 
            While photographing these objects, faded memories reemerge and subside onto physical particles. 
            The process of photographing becomes a process of revisiting their childhood memories in the most vivid forms, 
            as if walking into them, and perceiving them with an entirely different temporal identity.</p>
        <h2 className="text-2xl font-bold mb-4 mt-4 text-primary">Installation:</h2>
        <div className="mb-8">
          <iframe 
            src="https://www.youtube.com/embed/8_LOuH2RVCI" 
            width="100%" 
            height="400" 
            className="rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={photo}
                alt={`Memory Photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
