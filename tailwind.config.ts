import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        panel: "#111111",
        panelSoft: "#171717",
        gold: "#f5c542",
        goldSoft: "#c89b2c",
        textMain: "#f5f5f5",
        textSoft: "#a3a3a3",
        line: "rgba(245,197,66,0.16)"
      },
      boxShadow: {
        gold: "0 10px 40px rgba(245,197,66,0.12)",
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
