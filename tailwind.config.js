module.exports = {
  purge:{
    content:[
      // './src/**/*.html' /* ... */
      './src/**/*.{html,ts}'
    ]
    
  },
  darkmode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity:['disabled'],
      backgroundColor:['disabled']
    },
  },
  plugins: [],
}
