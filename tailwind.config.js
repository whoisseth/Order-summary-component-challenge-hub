module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": " hsl(245, 75%, 52%)",
        // Neutral
        "very-pale-blue": " hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
    },
  },
  plugins: [],
};
