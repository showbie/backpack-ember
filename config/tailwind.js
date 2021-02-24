/**
 * TailwindCSS configuration
 *
 * @see https://tailwindcss.com/docs/configuration
 * @see https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// eslint-disable-next-line node/no-unpublished-require
const COLORS = require('@showbie/backpack-tokens').showbie.colors;

module.exports = {
  purge: {
    /** @see https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css */
    enabled: process.env.NODE_ENV === 'production',
    content: ['addon/components/**/*.{js,ts,hbs}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      divider: 'rgba(7, 2, 20, 0.1)',

      grey: COLORS.grey,
      slate: COLORS.slate,
      blue: COLORS.blue,
      green: COLORS.green,
      red: COLORS.red,
      brand: COLORS.brand,
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
