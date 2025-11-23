import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
    },
    fontSize: {
      xs: ["0.813rem", { lineHeight: "1rem", letterSpacing: "0.02rem" }],
      sm: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.02rem" }],
      md: ["1.25rem", { lineHeight: "2rem", letterSpacing: "0.02rem" }],
      lg: ["1.625rem", { lineHeight: "2.625rem", letterSpacing: "0.02rem" }],
      xl: ["2.063rem", { lineHeight: "3.25rem", letterSpacing: "0.02rem" }],
    },
    fontWeight: {
      "400": "400",
      "500": "500",
      "600": "600",
    },
    extend: {
      colors: {
        /* Text Colors */
        tx: {
          DEFAULT: "hsl(var(--dark-800))",
          body: "hsl(var(--dark-800) / 0.95)",
          primary: "hsl(var(--dark-800))",
          secondary: "hsl(var(--dark-800) / 0.7)",
          tertiary: "hsl(var(--dark-800) / 0.5)",
          disabled: "hsl(var(--dark-800) / 0.22)",
          button: "hsl(var(--light-100))",
          brand: {
            DEFAULT: "hsl(var(--brand) / 0.95)",
            disabled: "hsl(var(--brand) / 0.35)",
          },
        },

        /* Icon Colors */
        ic: {
          DEFAULT: "hsl(var(--dark-800))",
          primary: "hsl(var(--dark-800) / 0.9)",
          secondary: "hsl(var(--dark-800) / 0.6)",
          tertiary: "hsl(var(--dark-800) / 0.4)",
          disabled: "hsl(var(--dark-800) / 0.15)",
          button: "hsl(var(--light-100))",
          brand: {
            DEFAULT: "hsl(var(--brand) / 0.9)",
            disabled: "hsl(var(--brand) / 0.5)",
          },
        },

        /* Background Colors */
        bg: {
          DEFAULT: "hsl(var(--light-100))",
          base: "hsl(var(--light-200))",
          card: {
            DEFAULT: "hsl(var(--light-100))",
            hover: "hsl(var(--light-200))",
            pressed: "hsl(var(--light-300))",
          },
          primary: "hsl(var(--dark-800) / 0.08)",
          secondary: "hsl(var(--dark-800) / 0.03)",
          hover: "hsl(var(--dark-800) / 0.12)",
          pressed: "hsl(var(--dark-800) / 0.15)",
          disabled: "hsl(var(--dark-800) / 0.04)",
          brand: {
            DEFAULT: "hsl(var(--brand) / 0.12)",
            hover: "hsl(var(--brand) / 0.18)",
            pressed: "hsl(var(--brand) / 0.22)",
            disabled: "hsl(var(--brand) / 0.06)",
          },
          button: {
            DEFAULT: "hsl(var(--dark-800))",
            hover: "hsl(var(--dark-900) / 0.9)",
            pressed: "hsl(var(--dark-900))",
            disabled: "hsl(var(--dark-800) / 0.15)",
            brand: "hsl(var(--brand))",
          },
        },

        /* Border Colors */
        bd: {
          DEFAULT: "hsl(var(--light-600) / 0.2)",
          base: "hsl(var(--light-600) / 0.15)",
          card: "hsl(var(--light-600) / 0.25)",
          primary: "hsl(var(--dark-800) / 0.15)",
          secondary: "hsl(var(--dark-800) / 0.08)",
          hover: "hsl(var(--dark-800) / 0.17)",
          pressed: "hsl(var(--dark-800) / 0.18)",
          disabled: "hsl(var(--dark-800) / 0.05)",
          brand: {
            DEFAULT: "hsl(var(--brand) / 0.55)",
            hover: "hsl(var(--brand) / 0.6)",
            pressed: "hsl(var(--brand) / 0.63)",
            disabled: "hsl(var(--brand) / 0.15)",
          },
        },

        /* Keep some compatibility for edge cases */
        input: "hsl(var(--light-600) / 0.2)",
        ring: "hsl(var(--brand) / 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
