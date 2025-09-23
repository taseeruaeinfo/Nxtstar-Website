/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0056b3", // Adjust to match your brand color
                secondary: "#ff6b00", // Adjust to match your brand color
                dark: "#333333",
                light: "#f8f9fa"
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            }
        },
    },
    plugins: [],
}