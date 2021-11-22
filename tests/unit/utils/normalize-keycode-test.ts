import { module, test } from 'qunit';

import { normalizeKey } from 'dummy/utils/normalize-keycode';

module('Unit | Utility | normalize-keycode', function () {
  test('it normalizes arrow keys', function (assert) {
    const mockEvent = { keyCode: 38, key: 'Up' };
    const keypress = normalizeKey(mockEvent);

    assert.strictEqual(keypress, 'ArrowUp');
  });

  test('it normalizes escape keys', (assert) => {
    const mockEvent = { keyCode: 27, key: 'Esc' };
    const keypress = normalizeKey(mockEvent);

    assert.strictEqual(keypress, 'Escape');
  });

  test('it does not normalize other keys', (assert) => {
    const mockEvent = { keyCode: 35, key: 'End' };
    const keypress = normalizeKey(mockEvent);

    assert.strictEqual(keypress, 'End');
  });
});
