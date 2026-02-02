import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff0f5',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          500: '#ec4899',
          600: '#be185d',
          900: '#831843',
        },
        accent: {
          gold: '#fbbf24',
          'gold-dark': '#d97706',
        }
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;