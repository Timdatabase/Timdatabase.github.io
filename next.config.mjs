// /** @type {import("next").NextConfig} */
// const nextConfig = {
//   output: "export",
// };

// export default nextConfig;
/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable Image Optimization for static export compatibility
  },
};

export default nextConfig;
