/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        standardGrey: '#c5c4c4',
        standardBlue: '#2aa7ff',
        darkGrey: '#6b6a6c',
        compLab: '#73d31a',
        lab: '#ffb63e',
        lecture: '#47addf',
        project: '#a454e9',
      },
      backgroundImage: {
        dayBlockBg: "url('/src/assets/pattern.png')",
      },
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
