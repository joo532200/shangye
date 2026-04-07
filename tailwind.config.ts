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
        soft: "0 10px 30px rgba(0,0,0,0.35)",
        glow: "0 0 60px rgba(245,197,66,0.12)"
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" }
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        }
      },
      animation: {
        floatY: "floatY 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
