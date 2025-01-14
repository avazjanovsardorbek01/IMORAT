/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Statik eksport qilish
  distDir: "build", // Build fayllari uchun papka nomi
  images: {
    unoptimized: true, // O'chirib qo'yish optimizatsiya
  },
};

export default nextConfig;
