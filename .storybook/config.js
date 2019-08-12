import { withA11y } from '@storybook/addon-a11y';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters, configure } from '@storybook/ember';
import { create } from '@storybook/theming';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Backpack',
      gridCellSize: 12,
    }),
    sortStoriesByKind: true,
  },
  docs: DocsPage,
});

addDecorator(withA11y);

function loadStories() {
  let req = require.context('../stories', true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
