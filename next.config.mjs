/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/share/:id",
        destination: "/api/share?id=:id",
      },
    ];
  },
};

export default nextConfig;
