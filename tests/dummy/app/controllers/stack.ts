import Controller from '@ember/controller';

export default class Stack extends Controller {
  placeholderList = [1, 2, 3, 4];
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    stack: Stack;
  }
}
