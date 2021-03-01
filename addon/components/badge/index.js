import Component from '@glimmer/component';

const badgeToneClasses = {
  info: '',
  caution: '',
  critical: '',
};

// interface BadgeArgs {
//   value?: number;
//   max?: number;
//   displayZero?: boolean;
//   tone?: keyof typeof badgeToneClasses;
// }

export default class Badge extends Component {
  get hasFormattedValue() {
    return !!this.formattedValue;
  }

  get value() {
    return this.args.value || 0;
  }

  get max() {
    return this.args.max || 99;
  }

  get classNames() {
    return this.args.tone && badgeToneClasses[this.args.tone];
  }

  get formattedValue() {
    const value = this.value * 1;
    const max = this.max * 1;
    let string;

    if (isNaN(value) || isNaN(max)) return undefined;

    if (value === Infinity) {
      string = '∞';
    } else if (max < value) {
      string = `${max}+`;
    } else if (value === 0 && this.args.displayZero) {
      string = `${value}`;
    }

    return string;
  }

  constructor(owner, args) {
    super(owner, args);
  }
}
