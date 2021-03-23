import Component from '@glimmer/component';

interface TextArgs {
  tagName: string;
  leadingClass: string;
  truncate?: boolean;
  preventSelection?: boolean;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class Text extends Component<TextArgs> {}
