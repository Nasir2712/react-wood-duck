import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import DatePicker from '../../src/DatePicker';

const CenterDecorator = (storyFn) => (
  <div className='container' >
    { storyFn() }
  </div>
);

const DatePickerStory = () => (
  <DatePicker gridClassName='col-md-12 col-sm-12 col-xs-12'/>
);

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('DatePicker', DatePickerStory);