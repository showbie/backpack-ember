import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('Button', module).add('default', () => {
  return {
    template: hbs`
        <UiButton @a11yLabel="helpful text">Default</UiButton>
        <UiButton @type="submit" @isDisabled=true>Disabled</UiButton>
      `,
  };
});
