/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/locacao-de-equipamentos',
          destination: '/locacao',
        },
      ],
    };
  },
};

export default nextConfig;
