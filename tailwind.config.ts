import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      h5: "18px",
      h4: "28px",
      h2: "34px",
      h1: "40px",
    },
    extend: {
      colors: {
        primary: {
          default: "#0D121E",
          dark: "#080B16"
        },
        secondary: "#F0B35B",
        white: "#FFFFFF"
      },
      backgroundImage: {
        'hero-pattern': "url('../public/hero-pattern.png')",
        'hero-pattern-grande': "url('../public/hero-pattern-grande.png')",
        'unidade-01': "url('../public/unidades/unidade1.png')",
        'unidade-02': "url('../public/unidades/unidade2.png')",
      },
      boxShadow: {
        'cardShadow': '2px 4px 8px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
