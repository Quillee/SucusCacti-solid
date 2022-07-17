module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      spanishGrey: '#969696',
      amaryllisRed: '#F5939F',
      underseasGreen: '#7A8A7F',
      languidBlue: '#A5B3BF',
      antiflashWhite: '#F2F2F2',
      platinum: '#E4E4E4',
    },
    extend: {
      fontFamily: {
        title: ['Black Jack'],
        content: ['Caviar Dreams'],
        'content-bold': ['Caviar Dreams Bold'],
      },
      fontSize: {
        tiny: '1.6rem',
        xs: '1.8rem',
        base: '2.5rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
