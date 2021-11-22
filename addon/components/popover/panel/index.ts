import { action } from '@ember/object';
import Component from '@glimmer/component';

import { normalizeKey } from '@showbie/backpack-ember/utils/normalize-keycode';

interface PanelArgs {
  isOpen: boolean;
  panelElement: HTMLElement;
  closePopover: () => void;
}

export default class Panel extends Component<PanelArgs> {
  @action
  handleKeyUp(event: KeyboardEvent) {
    const { isOpen, panelElement, closePopover } = this.args;
    const eventKey = normalizeKey(event);

    switch (eventKey) {
      case 'Escape':
        if (!isOpen) return;
        if (!panelElement) return;
        if (!panelElement.contains(document.activeElement)) return;

        event.preventDefault();
        event.stopPropagation();
        closePopover();
        break;
    }
  }
}
