/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about-me',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
