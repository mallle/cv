module.exports = {
  purge: {
    content: [
      `components/**/*.vue`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.js`,
      `nuxt.config.js`
    ]
  },
  mode: 'jit',
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
