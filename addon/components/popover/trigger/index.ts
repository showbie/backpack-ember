import { action } from '@ember/object';
import { next } from '@ember/runloop';
import Component from '@glimmer/component';

import { normalizeKey } from 'backpack-ember/utils/normalize-keycode';

interface TriggerArgs {
  triggerGuid: string;
  isOpen: boolean;
  openPopover: () => void;
  closePopover: () => void;
}

export default class Trigger extends Component<TriggerArgs> {
  @action
  handleKeydown(event: KeyboardEvent) {
    // @ts-expect-error -- `disabled` does exist on evt.target
    if (event.target?.disabled) return;

    const eventKey = normalizeKey(event);
    switch (eventKey) {
      case 'Space':
      case 'Enter':
        event.preventDefault();
        event.stopPropagation();

        if (this.args.isOpen && eventKey === 'Enter') {
          this.args.closePopover();
        } else {
          this.args.openPopover();
          next(() => {
            // Focus first item?
          });
        }
        break;
    }
  }
}
