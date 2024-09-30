/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "sm-m": "375px",
        "sm-l": "425px",
      },
      fontSize: {
        md: ['1.063rem', '1.5rem']
      },
      lineHeight: {
        "11": "1.313rem"
      },
      backgroundImage:{
        'homepage': "url('../img/homepage.jpg')",
      },
      fontFamily: {
        "sans": "'Outfit'"
      },
      width: {
        "40-p": "40%",
        "45-p": "45%",
        "65-p": "65%",
        "75-p": "75%",
        "90-p": "90%",
        "98-r": "45rem"
      },
      spacing: {
        "15-r": "3.75rem",
        "20-p": "20%",
        "25-p": "25%",
        "40-p": "40%",
        "50-p": "50%",
        "80-p": "80%",
        "90-p": "90%",
        "95-p": "95%",
        "99-p": "99%",
        "100-p": "100%"
      },
      transitionDuration: {
        '375': '375ms'
      },
      colors: {
        "cadet-gray": "#8da1b9",
        "dark-cadet-gray": "#7a92ad"
      },
      transitionProperty: {
        'width': 'width'
      },
      height: {
        "2-p": "2px",
        "50-p": "50%",
        "75-p": "75%",
        "51-px": "3.188rem"
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

