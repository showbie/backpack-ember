import Component from '@glimmer/component';

const badgeToneClasses = {
  default: 'bg-grey-200',
  info: 'bg-blue-600',
  caution: 'bg-yellow-100',
  critical: 'bg-red-700',
};

interface BadgeArgs {
  value?: number;
  max?: number;
  displayZero?: boolean;
  tone?: keyof typeof badgeToneClasses;
}

export default class Badge extends Component<BadgeArgs> {
  value = this.args.value || 0;
  max = this.args.max || 99;
  tone = this.args.tone || 'default';

  hasFormattedValue = !!this.formattedValue;

  get classNames(): string | undefined {
    const classNames = [
      'inline-flex items-center h-7 min-w-7 max-w-24 px-2 rounded-full cursor-default',
      badgeToneClasses[this.tone],
    ].join(' ');

    return classNames;
  }

  get textClassNames(): string {
    return [
      'text-xs font-extrabold font-800 leading-6 uppercase truncate capsize',
      ['default', 'caution'].includes(this.tone)
        ? 'text-slate-900'
        : 'text-white',
    ].join(' ');
  }

  get formattedValue(): string | undefined {
    const value = this.value * 1;
    const max = this.max * 1;
    let string;

    if (isNaN(value) || isNaN(max)) return undefined;

    if (value === Infinity) {
      string = '∞';
    } else if (max < value) {
      string = `${max}+`;
    } else if ((value === 0 && this.args.displayZero) || value !== 0) {
      string = `${value}`;
    }

    return string;
  }

  constructor(owner: unknown, args: BadgeArgs) {
    super(owner, args);
  }
}
