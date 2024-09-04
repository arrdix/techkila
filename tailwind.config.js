/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#ffffff',
                foreground: '#00425c',
                accent: '#00bfbc',
                dev: '#f54269',
            },
            lineHeight: {
                less: '0.9',
            },
        },
    },
    plugins: [],
}
