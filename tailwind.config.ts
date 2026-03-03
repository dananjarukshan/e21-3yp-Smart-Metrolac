import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1E3D",
          blue: "#1E3A8A",
          green: "#16A34A",
          mist: "#EAF2FF"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 30, 61, 0.08)"
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
