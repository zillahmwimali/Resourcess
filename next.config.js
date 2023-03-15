/** @type {import('next').NextConfig} */
module.exports = {
  
  reactStrictMode: true,
  images: {
      domains: ["yourDomain.com", 'tmdb.org', 'themoviedb.org'],
      formats: ["image/webp"],
  },
};
