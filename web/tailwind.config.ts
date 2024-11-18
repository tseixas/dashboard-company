import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          custom: {
            light: '#A0AB3D',
            DEFAULT: '#A0AB3D',
            dark: '#C1CE4B',
          }
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
} satisfies Config;
