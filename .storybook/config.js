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

configure(require.context('../stories', true, /\.story\.js$/), module);
