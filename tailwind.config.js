/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
   
      extend: {
        colors:{
          "navy":{
            50: "#A0AEC0",
            100: "#A3BFFA",
            200: "#718096",
            300: "#4A5568",
            400: "#2D3748",
            500: "#1A202C",
            600: "#667EEA"
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }