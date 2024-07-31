/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**'
      }
    ],
  },
};
// 'images.unsplash.com',
//           "static.nike.com",
//           "www.etq-amsterdam.com",
//           "images.pexels.com",

export default nextConfig;
