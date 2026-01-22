/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
      },
      fontFamily: {
        heading: ["var(--font-cinzel)"],
        body: ["var(--font-inter)"],
      },
      animation: {
        "slow-reveal": "reveal 2s ease-out forwards",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", filter: "blur(10px)", transform: "scale(1.1)" },
          "100%": { opacity: "1", filter: "blur(0px)", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
