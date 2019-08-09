'use strict';

const path = require('path');

const BroccoliDebug = require('broccoli-debug');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const writeFile = require('broccoli-file-creator');

const { name, version } = require('./package.json');

module.exports = {
  name,

  included: function(/* app */) {
    this._super.included.apply(this, arguments);

    this.import('vendor/normalize.css', { prepend: true });
    // see versionTree in treeForVendor
    this.import('vendor/@showbie/backpack-ember/register-version.js');
  },

  treeForVendor(vendorTree) {
    let debug = BroccoliDebug.buildDebugCallback(`${this.name}`);

    let versionTree = writeFile(
      `${this.name}/register-version.js`,
      `Ember.libraries.register('Showbie Backpack', '${version}');`
    );

    let normalizeTree = new Funnel(
      path.dirname(require.resolve('normalize.css')),
      {
        files: ['normalize.css'],
        annotation: 'BackpackEmber#normalizecssTree',
      }
    );

    let trees = [
      debug(vendorTree, 'vendor-input'),
      versionTree,
      normalizeTree,
    ].filter(Boolean);
    let mergedTrees = debug(new MergeTrees(trees), 'vendor-output');

    return this._super.treeForVendor(mergedTrees);
  },

  treeForStyles(vendorTree) {
    let debug = BroccoliDebug.buildDebugCallback(`${this.name}`);
    let dirname;

    // TODO: probably a better way to resolve this path but this works for now.
    try {
      // when running in consuming app this should resolve
      dirname = path.dirname(require.resolve(`${this.name}`));
    } catch (e) {
      // fallback for running the dummy app
      dirname = __dirname;
    }

    let scssTree = new Funnel(dirname, {
      srcDir: 'addon/styles/abstract',
      destDir: `${this.name}`,
      annotation: 'BackpackEmber#scssTree',
    });

    let mergedTrees = debug(
      new MergeTrees(
        [debug(vendorTree, 'styles-input'), scssTree].filter(Boolean)
      ),
      'styles-output'
    );

    return this._super.treeForStyles(mergedTrees);
  },
};
