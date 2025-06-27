// next.config.mjs
const nextConfig = {
  output: 'export', // Tells Next.js to generate a static site (in "out" folder)
  eslint: {
    ignoreDuringBuilds: true, // Optional: skip eslint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Optional: skip TypeScript errors during build
  },
  images: {
    unoptimized: true, // Required if using <Image /> in static export
  }
};

export default nextConfig;
