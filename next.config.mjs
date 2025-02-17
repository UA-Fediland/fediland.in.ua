/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "pub-855d0d5a7d064c1aa394bcd9550d15a0.r2.dev",
        },
      ],
    },
  };
  
  export default nextConfig;
  