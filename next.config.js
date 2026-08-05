/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/saas-products",
        destination: "/#projects",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
