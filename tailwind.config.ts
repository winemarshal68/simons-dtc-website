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
        navy: {
          DEFAULT: '#0C3C60',
          dark: '#072136',
          light: '#3179AF',
        },
        accent: {
          blue: '#3179AF',
          'light-blue': '#8CBCDB',
          'pale-blue': '#D8E8F2',
          orange: '#EC5800',
        },
      },
      fontFamily: {
        heading: ['var(--font-brandon)', 'sans-serif'],
        body: ['var(--font-avenir-light)', 'sans-serif'],
        'body-bold': ['var(--font-avenir-heavy)', 'sans-serif'],
      },
      maxWidth: {
        site: '980px',
      },
    },
  },
  plugins: [],
} satisfies Config;
