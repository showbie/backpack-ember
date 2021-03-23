import { render } from '@ember/test-helpers';

import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | stack', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // ESLint complains about `expect `filePath` to be a string, got `undefined``.
    // eslint-disable-next-line hbs/check-hbs-template-literals
    await render(hbs`
      <Stack as |Stack|>
        <Stack.Item>template block text</Stack.Item>
      </Stack>
    `);

    assert.equal(this.element.textContent?.trim(), 'template block text');
  });
});
