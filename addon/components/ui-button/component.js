import { action } from '@ember/object';
import { or } from '@ember/object/computed';
import Component from '@glimmer/component';

export default class UiButton extends Component {
  get appearance() {
    return this.args.appearance || 'default';
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

  @action
  onclick(e) {
    console.log(e);
  }
}
