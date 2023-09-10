/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        128: '32rem',
      },
      colors: {
        standardGrey: '#c5c4c4',
        standardBlue: '#2aa7ff',
        darkGrey: '#6b6a6c',
        compLab: '#5aa315',
        lab: '#e09a26',
        lecture: '#47addf',
        project: '#a454e9',
        eng: '#006d75',
        java: '#eb2f96',
        obj: '#fa541c',
        db: '#237804',
        meas: '#0958d9',
        topbar: '#4b4a4a',
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        14: 'repeat(14, minmax(0, 1fr))',
        100: 'repeat(14, minmax(min-content, 1fr))',
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
