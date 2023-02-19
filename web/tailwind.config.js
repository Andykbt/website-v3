/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'pastel-grey': 'rgb(213,205,196)',
                night: 'rgb(34,32,37)',
            },
            fontSize: {
                '25vh': [
                    '25vh',
                    {
                        lineHeight: 1,
                    },
                ],
            },
            borderWidth: {
                1: '1px',
            },
        },
    },
    plugins: [],
};
