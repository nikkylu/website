// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nikkylu', // your repository name
  images: {
    unoptimized: true,
  },
  assetPrefix: '/nikkylu/', // add trailing slash
}

module.exports = nextConfig