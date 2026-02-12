/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#10b981", // emerald accent like reference UI
                secondary: "#9ca3af",
                background: "#f2f4f7",
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
