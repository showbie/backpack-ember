import { action } from '@ember/object';
import { or } from '@ember/object/computed';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class UiButton extends Component {
  a11yLabel = null;

  type = 'button';

  appearance = 'default';

  isDestructive = false;

  isDisabled = false;

  @or('isDisabled', 'isRunning')
  disabled;

  @action
  onclick(e) {
    console.log(e);
  }
}
