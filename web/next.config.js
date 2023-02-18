/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    modules: true,
    images: {
        domains: ['assets.vercel.com', 'cdn.sanity.io'],
        formats: ['image/avif', 'image/webp'],
    },
};
