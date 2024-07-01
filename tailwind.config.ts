import { COLOR_PRIMARY } from './src/constant'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  corePlugins: {
    preflight: false
  },
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: COLOR_PRIMARY, // 品牌色
        secondary: 'hsla(201,66%,55%, 1)', // 辅助色
        success: 'hsla(100,77%,44%, 1)',
        info: 'hsla(209,100%,50%, 1)',
        error: 'hsla(359,100%,65%, 1)',
        danger: 'hsla(359,100%,65%, 1)',
        warning: 'hsla(40,96%,53%, 1)',
        white: 'hsla(0,0%,100%, 1)'
      },
      textColor: {
        color: 'hsla(var(--theme-color),0.85)' // 默认文字颜色 text-color,text-color/60
      },
      backgroundColor: {
        white: 'var(--adm-color-background)'
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900'
      }
    }
  },
  plugins: []
}
