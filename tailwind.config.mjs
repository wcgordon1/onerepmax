/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF4136', // Vibrant red
        accent: '#39FF14', // Neon green
        dark: {
          DEFAULT: '#1a1a1a',
          lighter: '#2a2a2a',
        }
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}