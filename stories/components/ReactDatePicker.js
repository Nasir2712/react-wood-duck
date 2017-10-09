import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ReactDatePicker from '../../src/ReactDatePicker';

const CenterDecorator = (storyFn) => (
  <div className='container' >
    { storyFn() }
  </div>
);
const ReactDatePickerStory = () => <ReactDatePicker />;

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('ReactDatePicker', ReactDatePickerStory);