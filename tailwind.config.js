module.exports = {
   purge: {
     enabled: true,
     content: [
       './src/**/*.html',
       './src/**/*.js',
     ]
   },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '200': '50rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
