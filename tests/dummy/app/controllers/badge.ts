import Controller from '@ember/controller';

export default class Badge extends Controller {
  infinityValue = 5 / 0;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    badge: Badge;
  }
}
