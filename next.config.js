// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: '/nikkylu', // your repository name
//   images: {
//     unoptimized: true,
//   },
//   assetPrefix: '/nikkylu/', // add trailing slash
// }

// module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Just keep the essential configs for now
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: '/website',
//   assetPrefix: '/website/',
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/website' : '',
  assetPrefix: isProd ? '/website/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig