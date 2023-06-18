/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'myBackground': "url('./src/assets/images/background.jpg')",
      },
      colors:{
       lightGrey:"#C3CBDE",
       titleGrey:"#7181A1",
       labelGrey:"#4D5E80"
      }
    },
  },
  plugins: [],
}

