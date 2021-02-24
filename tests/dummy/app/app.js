import Application from '@ember/application';

import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';

import config from 'dummy/config/environment';

export default class App extends Application {
  // eslint-disable-next-line no-undef
  modulePrefix = config.modulePrefix;
  // eslint-disable-next-line no-undef
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
