type KeyboardEventValues = Pick<KeyboardEvent, 'key' | 'keyCode'>;

/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge.
 */
export function normalizeKey({ key, keyCode }: KeyboardEventValues) {
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return `Arrow${key}`;
  }
  if (keyCode === 27) {
    return 'Escape';
  }
  return key;
}
