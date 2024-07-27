/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'md' : {'min': '0px' , 'max':'768px'},  
    }
  },
  plugins: [],
}

