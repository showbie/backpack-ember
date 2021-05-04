import Component from '@glimmer/component';

/**
 * An a11y helper that allows a component to add an ARIA live region
 * while it is rendered.
 *
 * @see https://www.w3.org/TR/wai-aria-1.1/#attrs_liveregions
 */
export default class Text extends Component {
  appParent;

  constructor(owner, args) {
    super(owner, args);

    // eslint-disable-next-line
    // @ts-ignore
    if (typeof FastBoot === 'undefined') {
      this.appParent = document.body;
    }
  }
}
