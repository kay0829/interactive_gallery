/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins, sans-serif"],
                rancho: ["Rancho, cursive;"],
            },
            colors: {
                primary: "#242424",
                jungle: "#094b65",
            },
            translate: {
                "reverse-2/4": "-50%",
            },
        },
    },
    plugins: [],
};
