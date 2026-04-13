import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm neutral — matches the grayscale typography in the Avera logo
        brand: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        // Burnt orange / rust — pulled from the Avera sun logomark
        gold: {
          50: "#fdf5ef",
          100: "#fae7d4",
          200: "#f4cba3",
          300: "#eca76a",
          400: "#e17d34",
          500: "#c04108",
          600: "#a03005",
          700: "#7f2405",
          800: "#5f1a04",
          900: "#3f1103",
          950: "#1f0801",
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', "Georgia", "serif"],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
