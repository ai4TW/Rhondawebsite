import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7f4",
          100: "#dbeee3",
          200: "#b8ddc9",
          300: "#8cc5a8",
          400: "#5ea584",
          500: "#3d8866",
          600: "#2c6b50",
          700: "#235541",
          800: "#1d4435",
          900: "#18382c",
          950: "#0c2019",
        },
        gold: {
          400: "#e9c46a",
          500: "#d4a53a",
          600: "#b8862a",
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
