/**
 * TailwindCSS configuration
 *
 * @see https://tailwindcss.com/docs/configuration
 * @see https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

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

    fontMetrics: {
      sans: {
        capHeight: 708,
        ascent: 940,
        descent: -288,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },

    fontSize: {
      xs: '1rem',
      sm: '1.08334rem',
      base: '1.25rem',
      md: '1.4167rem',
      lg: '1.5rem',
      xl: '1.75rem',
    },

    extend: {
      fontFamily: {
        sans: "'Avenir W01', 'Avenir Next W01', sans-serif",
      },

      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-capsize').default({ rootSize: 12 })],
};
