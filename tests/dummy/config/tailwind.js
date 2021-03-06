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
      colors: {
        gray: TWCOLORS.coolGray,
        yellow: {
          100: '#faf0a6',
        },
      },
      fontSize: {
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      ...CONFIG.theme.extend,
    },
  },

  variants: {
    extend: {},
  },

  // https://github.com/tailwindlabs/tailwindcss-typography
  plugins: [require('@tailwindcss/typography'), ...CONFIG.plugins],
};
