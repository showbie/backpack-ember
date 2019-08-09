import { action, computed } from '@ember/object';
import { or } from '@ember/object/computed';
import Component from '@glimmer/component';

import cx from 'classnames';

export default class UiButton extends Component {
  get appearance() {
    return this.args.appearance || 'default';
  }

  get size() {
    return this.args.size || 'lg';
  }

  get isDestructive() {
    return this.args.isDestructive || false;
  }

  get isDisabled() {
    return this.args.isDisabled || false;
  }

  get isRunning() {
    return this.args.isRunning || false;
  }

  @or('isDisabled', 'isRunning')
  disabled;

  @computed('appearance', 'size')
  get componentClass() {
    let appearance = this.appearance;
    let size = this.size;

    return cx({
      'ui-button': true,
      [`ui-button--${appearance}`]: appearance !== 'default',
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
