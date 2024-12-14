/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F4F1',
        primary: '#282828',  
        accent: '#f4511e', 
        dan:'#aa938b',
      },
      fontFamily: {
        serif: ['Charter', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}