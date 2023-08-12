/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'text-primary': '#FFFFFF',
            primary: '#21201E',
            secondary: '#343330',
        },
    },
},
  plugins: [],
}

