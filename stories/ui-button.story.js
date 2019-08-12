import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

const appearanceOptions = [
  'default',
  'primary',
  'faded',
  'destroy', // Change this to its own argument.
  'blank',
  'link',
  'white',
  'inherit',
];

const stories = storiesOf('Button', module);

appearanceOptions.forEach((style) => {
  stories.add(style, () => {
    return {
      template: hbs`
        <UiButton @appearance={{style}}>{{style}}</UiButton>
        <UiButton @appearance={{style}} @isDisabled={{true}}>Disabled</UiButton>
      `,
      context: {
        style: style,
      },
    };
  });
});
