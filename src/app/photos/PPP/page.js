import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';


const basePath =
  process.env.NODE_ENV === 'production' ? '/website' : ''

  
const getPhotos = () => {
  const photosDirectory = path.join(process.cwd(), 'public/photos/PPP');
  return fs.readdirSync(photosDirectory)
    .filter(file => !file.startsWith('.') && !file.endsWith('.DS_Store'))
    .map(file => `/photos/PPP/${file}`);
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

        <h1 className="text-4xl font-bold mb-8 text-primary">Particle, Pixel, Presence (2026)</h1>
        <div className='mb-4'>
        <p className=" text-primary">
            Work in Progress. 16mm film and sound space instillation exploring human, nature, cosmo as interconnected entities. 
        The project invites viewers to contemplate their place in the cosmos and the intricate web of relationships that define our existence as particles.
           </p>
         {/* <p className=" text-primary">  I almost never photo humans, but I would like to be with water together this time.</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="relative w-full overflow-hidden">
              <Image
                src={`${basePath}${photo}`}
                alt={`PPP Photo ${index + 1}`}
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
