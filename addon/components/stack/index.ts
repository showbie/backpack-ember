import Component from '@glimmer/component';

interface StackArgs {
  /** A Tailwind `space-y-` utility class (or classes). */
  spaceClass?: string;
  /** A Tailwind `justify-` flex alignment utility class. */
  alignClass?: string;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class Stack extends Component<StackArgs> {}
