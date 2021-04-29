import Component from '@glimmer/component';

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
