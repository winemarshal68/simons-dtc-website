import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#faf5f6',
          100: '#f5ebee',
          200: '#ead7dc',
          300: '#d9b3bd',
          400: '#c48796',
          500: '#a85968',
          600: '#8f495a',
          700: '#773d4c',
          800: '#643641',
          900: '#56313a',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
