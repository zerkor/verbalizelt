import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(50 100% 80%)",             // Jaune plus foncé
        input: "hsl(50 100% 80%)",              // Jaune plus foncé
        ring: "hsl(50 100% 50%)",               // Jaune vif
        background: "hsl(0 0% 100%)",           // Fond blanc
        foreground: "hsl(222.2 84% 4.9%)",      // Texte noir
        primary: {
          DEFAULT: "hsl(50 100% 50%)",          // Jaune vif
          foreground: "hsl(210 40% 98%)",       // Texte clair (blanc)
        },
        secondary: {
          DEFAULT: "hsl(50 100% 90%)",          // Jaune clair
          foreground: "hsl(222.2 47.4% 11.2%)", // Texte foncé (presque noir)
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",        // Rouge vif
          foreground: "hsl(210 40% 98%)",       // Texte clair (blanc)
        },
        muted: {
          DEFAULT: "hsl(50 100% 90%)",          // Jaune clair
          foreground: "hsl(215.4 16.3% 46.9%)", // Texte gris foncé
        },
        accent: {
          DEFAULT: "hsl(50 100% 90%)",          // Jaune clair
          foreground: "hsl(222.2 47.4% 11.2%)", // Texte foncé (presque noir)
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",            // Fond blanc
          foreground: "hsl(222.2 84% 4.9%)",    // Texte noir
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",            // Fond blanc
          foreground: "hsl(222.2 84% 4.9%)",    // Texte noir
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
