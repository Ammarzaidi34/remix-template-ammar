import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#4f46e5"
      }
    },
  },
  plugins: [],
} satisfies Config;
