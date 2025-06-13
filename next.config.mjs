/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vwrinhz4a3iiasjx.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
