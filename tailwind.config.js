/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
      },
    },
  },
  plugins: [],
};
