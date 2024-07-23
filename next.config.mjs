/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'via.placeholder.com',
      },
      {
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
      },
    ],
  },
};

export default nextConfig;
