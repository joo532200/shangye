import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07162d",
        card: "#12233f",
        glow: "#ff4d67",
        sand: "#efe7dd"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(4, 14, 32, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
