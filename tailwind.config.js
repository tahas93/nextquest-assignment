module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      colors: {},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      boxShadow: {
        regular: '0 0 8px rgb(0 0 0 / 12%)',
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
