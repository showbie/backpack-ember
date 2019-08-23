'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const isProduction = EmberAddon.env() === 'production';
const nodeSass = require('node-sass');
const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // Paths to components what include Tailwind classes.
      './addon/components/**/*.hbs',
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
};

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: { implementation: nodeSass },
    postcssOptions: {
      compile: {
        plugins: [
          require('postcss-import'),
          require('tailwindcss')('./config/tailwind.config.js'),
          ...(isProduction ? [purgeCSS] : []),
        ],
      },
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
