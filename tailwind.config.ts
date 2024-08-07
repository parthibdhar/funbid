
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      height: {
        header: '560px',
        rate: '400px',
      },
      fontSize: {
        h1: '2.6rem',
      },
      screens: {
        xs: '475px',
      },
      colors: {
        main: '#050121',
        subMain: '#131B40',
        dry: '#140D4A',
        text: '#6D28D9',
        subText: '#A167FC',
        border: '#5517B7',
        inputBg: '#2d396b',
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
