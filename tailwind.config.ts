import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgthemeClr: "#F5F7FA",
        textThemeClr: "#4CAF4F",
        btnHover: "#43A047",
        themeblackClr: "#4D4D4D",
        themegrayClr: "#717171",
        bgthemefooter: "#263238",
      },
    },
  },
  plugins: [],
};
export default config;
