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
        hostname: "4j84k2z9mtr6e5m6.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
