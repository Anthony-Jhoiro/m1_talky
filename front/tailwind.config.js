module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./.storybook/preview.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#7692FF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#F0F3FF',
          '300': '#C8D3FF',
          '400': '#9FB2FF',
          '500': '#7692FF',
          '600': '#3E65FF',
          '700': '#0639FF',
          '800': '#002ACD',
          '900': '#001E95'
        },
        'secondary': {
          DEFAULT: '#8D3B72',
          '50': '#DAA6C9',
          '100': '#D498C0',
          '200': '#C87BAE',
          '300': '#BC5E9D',
          '400': '#AA4789',
          '500': '#8D3B72',
          '600': '#652A52',
          '700': '#3E1A32',
          '800': '#160912',
          '900': '#000000'
        },
        'tertiary': {
          DEFAULT: '#679289',
          '50': '#D2DFDC',
          '100': '#C6D7D3',
          '200': '#AEC6C1',
          '300': '#96B5AE',
          '400': '#7EA49C',
          '500': '#679289',
          '600': '#50716A',
          '700': '#39504B',
          '800': '#212F2C',
          '900': '#0A0E0E'
        },
        background: '#EBD8C8',
        'text': {
          DEFAULT: '#071E22',
          '50': '#26A4BA',
          '100': '#2395A9',
          '200': '#1C7888',
          '300': '#155A66',
          '400': '#0E3C44',
          '500': '#071E22',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      },
      aspectRatio: {
        '3/1': '3 / 1',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    }),
    require('tw-elements/dist/plugin')
  ],
}
