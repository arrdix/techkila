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
        },
    },
    plugins: [],
}
