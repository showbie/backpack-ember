import hbs from 'htmlbars-inline-precompile';

function buttonExample(style) {
  return {
    template: hbs`
      <UiButton @appearance={{style}}>{{style}}</UiButton>
      <UiButton @appearance={{style}} @isDisabled={{true}}>Disabled</UiButton>
    `,
    context: {
      style: style,
    },
  };
}

export default {
  title: 'Button',
};

export const Default = () => buttonExample('default');
export const Primary = () => buttonExample('primary');
export const Faded = () => buttonExample('faded');
export const Destroy = () => buttonExample('destroy');
export const Blank = () => buttonExample('blank');
export const Link = () => buttonExample('link');
export const White = () => buttonExample('white');
export const Inherit = () => buttonExample('inherit');
