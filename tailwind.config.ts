import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        purple: {
          10: '#f1eeff',
          15: '#f4f1ff',
          20: '#e4deff',
          30: '#cec3ff',
          35: '#b7a7ff',
          40: '#a28dff',
          50: '#8d74ff',
          60: '#7863d9',
          70: '#6452b5',
          80: '#504291',
          90: '#3f3473',
        },
        gray: {
          10: '#F6F6FA',
          20: '#F2F2F4',
          30: '#E7E7EA',
          40: '#C9C9D4',
          50: '#B4B4C2',
          60: '#7E7F8E',
          70: '#696A7D',
          75: '#474756',
          80: '#282931',
          90: '#19191D',
        },
        system: {
          error: '#FF5555',
          alert: '#E96D6D',
          positive: '#14DB6E',
        },
        accent: {
          redOrange: {
            5: '#fff0e6',
            10: '#ffbf91',
            20: '#ff6a00',
          },
          yellowGreen: {
            5: '#eff8e6',
            10: '#b8df91',
            20: '#5ab500',
          },
          blue: {
            5: '#e6f7ff',
            10: '#91deff',
            20: '#00b3ff',
          },
        },
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [],
};
export default config;
