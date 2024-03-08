const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d",
    },
    ".perspective":{
      perspective: "1000px",
    },
    ".backface-hidden":{
      backfaceVisibility : "hidden",
    }
  })
})


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat','sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/src/assets/image.png')",
      },
    },
  },
  plugins: [Myclass],
}
