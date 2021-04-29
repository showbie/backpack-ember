import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

const KeyDisplay: Record<string, Record<string, string>> = {
  mac: {
    ArrowUp: '↑',
    ArrowDown: '↓',
    ArrowLeft: '←',
    ArrowRight: '→',
    Home: '↖',
    End: '↘',
    Alt: '⌥',
    CapsLock: '⇪',
    Meta: '⌘',
    Shift: '⇧',
    Control: '⌃',
    Backspace: '⌫',
    Delete: '⌦',
    Enter: '↵',
    Escape: '⎋',
    Tab: '⇥',
    ShiftTab: '⇤',
    PageUp: '⇞',
    PageDown: '⇟',
    ' ': '␣',
  },
  other: {
    ArrowUp: '↑',
    ArrowDown: '↓',
    ArrowLeft: '←',
    ArrowRight: '→',
    Meta: 'Win',
    Control: 'Ctrl',
    Backspace: '⌫',
    Delete: 'Del',
    Escape: 'Esc',
    PageUp: 'PgUp',
    PageDown: 'PgDn',
    ' ': '␣',
  },
};

export default class KeyCaster extends Component {
  window?: Window & typeof globalThis;
  keyFmt: 'mac' | 'other' = 'other';

  @tracked
  keys = [];

  get displayedKeys() {
    return this.keys.slice().reverse().join(' ');
  }

  @action
  onWindowKeydown(event: KeyboardEvent) {
    const { keys } = this as any;

    keys.unshift(
      event.shiftKey && event.key !== 'Shift'
        ? KeyDisplay[this.keyFmt][`Shift${event.key}`] ?? event.key
        : KeyDisplay[this.keyFmt][event.key] ?? event.key
    );

    this.keys = keys;

    setTimeout(() => {
      if (!this.isDestroying) {
        const { keys } = this;

        keys.pop();
        this.keys = keys;
      }
    }, 2000);
  }

  afterInsert() {
    this.window = window;
    this.keyFmt =
      navigator.userAgent.indexOf('Mac OS X') !== -1 ? 'mac' : 'other';
  }
}
