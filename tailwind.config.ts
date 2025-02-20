import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },backgroundImage: {
        'custom-radial': "radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
