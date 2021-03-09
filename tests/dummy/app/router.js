import EmberRouter from '@ember/routing/router';

import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  // eslint-disable-next-line no-undef
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('badge');
  this.route('text');
});
