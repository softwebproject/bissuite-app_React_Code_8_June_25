/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: false,
    images: {
        unoptimized: true,
        domains: ["110.39.184.210"],
    },
};

export default nextConfig;
