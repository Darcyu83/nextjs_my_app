/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org"], // poster image path
  },

  // 리디렉트
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/new/:path*",
        permanent: false,
      },
    ];
  },

  // alias
  async rewrites() {
    return [
      {
        source: "/api/movies_popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      },

      {
        source: "/api/movies_popular/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
