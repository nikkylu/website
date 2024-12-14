import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

// const getPhotos = () => {
//   const photosDirectory = path.join(process.cwd(), 'public/photos/memory');
//   return fs.readdirSync(photosDirectory)
//     .filter(file => !file.startsWith('.') && !file.endsWith('.DS_Store'))
//     .map(file => `/photos/corpse/${file}`);
//     console.log('Photos:', files);
// };

const getPhotos = () => {
  const photosDirectory = path.join(process.cwd(), 'public/photos/world');
  const files = fs.readdirSync(photosDirectory);

  console.log('All Files:', files); // List all files in the directory

  const filteredFiles = files
    .filter(file => !file.startsWith('.') && /\.(jpg|jpeg|png|gif)$/i.test(file));
  
  console.log('Filtered Files:', filteredFiles); // List files that pass the filter

  return filteredFiles.map(file => `/photos/world/${file}`);
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

        <h1 className="text-4xl font-bold mb-8 text-primary">We Stare into the World and See Ourselves (2022)</h1>
        {/* <div className='mb-4'>
        <p className=" text-primary">
            The proximity to a vast water body has been a defining anchor in my life since childhood.</p>
         <p className=" text-primary">  I almost never photo humans, but I would like to be with water together this time.</p>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="relative w-full overflow-hidden">
              <Image
                src={photo}
                alt={`Memory Photo ${index + 1}`}
                layout="responsive"
                width={3}
                height={4}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
