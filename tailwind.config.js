module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '641px',
      md: '768px',
      lg: '1025px',
      xl: '1281px',
      '2xl': '1537px',
    },
    fontFamily: {},
    extend: {
      colors: {
        'nx-nav-color': { 100: '#1e0815', 200: '#ff48b314', 300: '#ff48b31f' },
        'nx-border': { 100: '#e9e8eb33' },
        'nx-white': { 100: '#e9e8eb' },
        'nx-gray': { 100: '#b7b5b9' },
        'nx-black': { 100: '#290f1e', 200: '#232027' },
        'nx-pink': { 100: '#ff68c0' },
        'nx-green': { 100: '#79e028', 200: '#79e02852' },
        'nx-hover': {
          100: 'rgba(255, 72, 179, 0.04)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hot':
          'linear-gradient(90deg, rgb(255, 232, 8) 0%, rgb(255, 132, 116) 27.5%, rgb(255, 106, 193) 63%, rgb(251, 46, 165) 95.5%);',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      boxShadow: {
        regular: '0 0 8px rgb(0 0 0 / 12%)',
        'nx-btn-shadow': 'rgba(255, 104, 192, 0.48) 0px 0px 32px 8px',
        'nx-hot-shadow': 'rgba(255, 104, 192, 0.56) 0px 8px 33px 0px#b7b5b9',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        0: 0,
        10: 10,
        20: 20,
        25: 25,
        30: 30,
        40: 40,
        50: 50,
        75: 75,
        100: 100,
        9: 9,
        99: 99,
        999: 999,
        9999: '9999',
        auto: 'auto',
        modal: '999999',
      },
    },
  },
  plugins: [require('tailwindcss/colors')],
};
