import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('Button', module).add('default', () => {
  return {
    template: hbs`
        <UiButton aria-label="helpful text">Default</UiButton>
        <UiButton @isDisabled={{true}}>Disabled</UiButton>
      `,
  };
});
