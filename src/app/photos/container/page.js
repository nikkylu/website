import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const basePath =
  process.env.NODE_ENV === 'production' ? '/website' : ''

const getPhotos = () => {
  const photosDirectory = path.join(process.cwd(), 'public/photos/container');
  return fs.readdirSync(photosDirectory)
    .filter(file => !file.startsWith('.') && !file.endsWith('.DS_Store'))
    .map(file => `/photos/container/${file}`);
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

        <h1 className="text-4xl font-bold mb-8 text-primary">Images as statements, identities as containers (2025)</h1>
        <div className='mb-4'>
        <p className=" text-primary">
            Through nomadic living and adventures with remote landscapes, Nikky seeks to expose not only the
impressions left by nature but also the traces of those experiences as they mark the self. Identity as a
container made of flesh, open, vulnerable, and shaped by the very environments it inhabits.
Photographs and videos here are not treated as transparent windows onto reality. Instead, they are
statements—images as words, as voices carrying meaning independent of what they depict. Influenced
by Roger Scruton’s reflections on photography, the project explores how images can hold and transmit
the intensity of lived experience and imagination.
Nature is not just observed and admired; it is endured, shed, and pressed against the body. Tactile
encounters weave themselves into the visual record. Each image bears both the scar of the landscape
and the vulnerability of human identity.
The resulting body of work shows living as exposure: to experience and to be altered. Images speak as
lived statements, while identity becomes a container with traces, a surface of flesh and experience.</p>
         {/* <p className=" text-primary">  I almost never photo humans, but I would like to be with water together this time.</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="relative w-full overflow-hidden">
              <Image
                src={`${basePath}${photo}`}
                alt={`Container Photo ${index + 1}`}
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
