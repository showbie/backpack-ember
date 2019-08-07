import { action, computed } from '@ember/object';
import Component from '@glimmer/component';

export default class UiButton extends Component {
  a11yLabel = '';

  type = 'button';

  appearance = 'default';

  isDestructive = false;

  isDisabled = false;

  @computed('isDisabled', 'isRunning')
  get disabled() {
    return this.isDisabled || this.isRunning;
  }
}
