/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    modules: true,
    images: {
        domains: ['assets.vercel.com', 'cdn.sanity.io', 'andykbt.net'],
        formats: ['image/avif', 'image/webp'],
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
};
