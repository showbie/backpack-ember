import Component from '@glimmer/component';

const badgeToneClasses = {
  info: '',
  caution: '',
  critical: '',
};

interface BadgeArgs {
  tone: keyof typeof badgeToneClasses;
}

export default class Badge extends Component<BadgeArgs> {
  constructor(owner: unknown, args: BadgeArgs) {
    super(owner, args);
  }

  get classNames(): string {
    return badgeToneClasses[this.args.tone];
  }
}
