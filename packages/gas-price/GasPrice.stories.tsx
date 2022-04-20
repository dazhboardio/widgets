/* eslint-disable */
// import { storiesOf } from '@storybook/react';

import * as React from 'react';
// import { text } from "@storybook/addon-knobs/react";
// import { withKnobs } from '@storybook/addon-knobs/react';
import GasPrice from '.';
// const stories = storiesOf('Storybook Knobs', module);


export default {
  title: 'Example/GasPrice',
  component: GasPrice,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <GasPrice {...args} />;

export const Basic = Template.bind({});
// export const Basic = (args) => <GasPrice {...args} />;

// storiesOf('Button', module)
//     .add('with text', (): ReactElement => (
//         <Button label="hi" />
//     ))
//     .add('with emoji', (): ReactElement => (
//         <Button label="good"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//     ))
//     .add('with label', (): ReactElement => (
//         <Button label="Hello" />
//     ));

// storiesOf('My Map', module)
//   .addDecorator(withKnobs)
//   .add('default', (): React.ReactElement => (
//     <GasPrice />
//   ));

// storiesOf('Block Div', module)
//   .add('default', (): React.ReactElement => (
//     <div style={{
//       backgroundColor: 'red', color: 'white', width: 300, height: 300,
//     }}
//     >
//       Hello
//     </div>
//   ));
