import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface PopoverArgs {
  className?: string;
}

export default class Popover extends Component<PopoverArgs> {
  guid = `${guidFor(this)}-popover`;
  @tracked isOpen = false;

  @action
  openPopover() {
    this.isOpen = true;
  }

  @action
  closePopover(focusableElement?: HTMLElement) {
    this.isOpen = false;

    const elementToFocus = (() => {
      if (!focusableElement) return this.triggerElement;
      if (focusableElement instanceof HTMLElement) return focusableElement;

      return this.triggerElement;
    })();

    elementToFocus?.focus();
  }

  get triggerGuid() {
    return `${this.guid}-trigger`;
  }

  get panelGuid() {
    return `${this.guid}-panel`;
  }

  get triggerElement() {
    // eslint-disable-next-line
    // @ts-ignore
    return typeof FastBoot === 'undefined'
      ? document.getElementById(this.triggerGuid)
      : null;
  }
}
