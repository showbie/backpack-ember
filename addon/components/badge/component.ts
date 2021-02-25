import Component from '@glimmer/component';

const badgeToneClasses = {
  info: '',
  caution: '',
  critical: '',
};

interface BadgeArgs {
  value?: number;
  max?: number;
  displayZero?: boolean;
  tone?: keyof typeof badgeToneClasses;
}

export default class Badge extends Component<BadgeArgs> {
  hasFormattedValue = !!this.formattedValue;

  get value(): number {
    return this.args.value || 0;
  }

  get max(): number {
    return this.args.max || 99;
  }

  get classNames(): string | undefined {
    return this.args.tone && badgeToneClasses[this.args.tone];
  }

  get formattedValue(): string | undefined {
    const value = this.value * 1;
    const max = this.max * 1;
    let string;

    if (isNaN(value) || isNaN(max)) return;

    if (value === Infinity) {
      string = '∞';
    } else if (max < value) {
      string = `${max}+`;
    } else if (value === 0 && this.args.displayZero) {
      string = `${value}`;
    }

    return string;
  }

  constructor(owner: unknown, args: BadgeArgs) {
    super(owner, args);
  }
}
