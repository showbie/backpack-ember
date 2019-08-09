import { action, computed } from '@ember/object';
import { or } from '@ember/object/computed';
import Component from '@glimmer/component';

import cx from 'classnames';

export default class UiButton extends Component {
  /**
   * Called `type` in showbie-ui.
   */
  get appearance() {
    return this.args.appearance || 'default';
  }

  get size() {
    return this.args.size || 'lg';
  }

  /**
   * Called `destructive` in showbie-ui.
   */
  get isDestructive() {
    return this.args.isDestructive || false;
  }

  /**
   * Called `disableWhen` in showbie-ui.
   */
  get isDisabled() {
    return this.args.isDisabled || false;
  }

  get isRunning() {
    return this.args.isRunning || false;
  }

  get block() {
    return this.args.block || true;
  }

  get fixedSize() {
    return this.args.fixedSize || false;
  }

  get inline() {
    return this.args.inline || false;
  }

  get outlined() {
    return this.args.outlined || false;
  }

  @or('isDisabled', 'isRunning')
  disabled;

  @computed('appearance', 'size')
  get componentClass() {
    let appearance = this.appearance;
    let size = this.size;

    return cx({
      'ui-button': true,
      [`ui-button--${appearance}`]: true, // appearance !== 'default',
      [`ui-button--${size}`]: true,
      // 'is-destructive': isDestructive,
      // 'is-hovered': isHovered,
    });
  }

  @action
  onclick(e) {
    console.log(e);
  }
}
