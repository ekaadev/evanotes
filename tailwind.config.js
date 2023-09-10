/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Montserrat', 'sans'],
        custom: ['Poppins', 'sans'], // 'sans' bisa diganti dengan tipe font lainnya
      },
      colors: {
        redup: 'rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
