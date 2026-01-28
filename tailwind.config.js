// tailwind.config.js
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "430px",
      },
    },
  },
  plugins: [],
};