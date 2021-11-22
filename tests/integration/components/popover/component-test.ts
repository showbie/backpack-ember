import { render } from '@ember/test-helpers';

import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | popover', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
      <Popover as |popover|>
        <popover.Trigger>Trigger</popover.Trigger>
        <popover.Panel>
          template block text
        </popover.Panel>
      </Popover>
    `);

    assert.equal(this.element.textContent?.trim(), 'template block text');
  });
});
