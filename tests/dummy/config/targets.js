'use strict';

const browsers = [
  'Chrome >= 78',
  'last 1 Firefox versions',
  'last 1 Safari versions',
];

const isCI = Boolean(process.env.CI);
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  browsers.push('ie 11');
}

module.exports = {
  browsers,

  /**
   * Fix error with optional chaining syntax.
   * @see https://github.com/ember-fastboot/ember-cli-fastboot/issues/791#issuecomment-695208404
   */
  node: 'current',
};
