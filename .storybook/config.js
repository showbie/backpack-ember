import { configure } from '@storybook/ember';

function loadStories() {
  let req = require.context('../stories', true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
