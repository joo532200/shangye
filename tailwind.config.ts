import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fffaf6",
          100: "#f8f2ea",
          200: "#efe0d1",
          300: "#e8d3bf",
          400: "#dbc7b6",
          500: "#c8b09c"
        },
        ink: {
          700: "#5f4f45",
          800: "#4f3e34",
          900: "#2f241d"
        }
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(80,56,34,0.18)",
        soft: "0 16px 60px rgba(102,78,60,0.08)"
      },
      borderRadius: {
        luxe: "2rem",
        xl2: "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
