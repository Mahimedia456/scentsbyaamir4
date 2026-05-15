/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"DIN Condensed"', "Impact", "Arial Narrow", "sans-serif"],
        body: ['"DIN Pro"', "Inter", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          black: "var(--color-black)",
          white: "var(--color-white)",
          cream: "var(--color-cream)",
          bg: "var(--color-bg)",
          surface: "var(--color-surface)",
          text: "var(--color-text)",
          muted: "var(--color-muted)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          accent: "var(--color-accent)",
        },
      },
      maxWidth: {
        site: "var(--container)",
      },
      boxShadow: {
        luxury: "0 30px 90px rgba(0, 0, 0, 0.35)",
        glow: "0 0 60px var(--color-glow)",
      },
      letterSpacing: {
        luxury: "0.04em",
        wideLuxury: "0.08em",
      },
    },
  },
  plugins: [],
};