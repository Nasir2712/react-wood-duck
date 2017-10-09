import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import DateTimePicker from '../../src/DateTimePicker';

const CenterDecorator = (storyFn) => (
  <div className='container' >
    { storyFn() }
  </div>
);

const DateTimePickerStory = () => (<DateTimePicker />)

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('DateTimePicker', DateTimePickerStory);
