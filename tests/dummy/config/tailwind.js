// eslint-disable-next-line node/no-unpublished-require
const TWCOLORS = require('tailwindcss/colors');
const CONFIG = require('../../../config/tailwind');

/**
 * Extends the primary config to include settings & utilities intended
 * only for the dummy app.
 */
module.exports = {
  purge: {
    ...CONFIG.purge,
  },

  darkMode: CONFIG.darkMode,

  theme: {
    ...CONFIG.theme,

    container: {
      center: true,
    },

    extend: {
      ...CONFIG.theme.extend,
      colors: {
        gray: TWCOLORS.coolGray,
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [...CONFIG.plugins, require('@tailwindcss/typography')],
};
