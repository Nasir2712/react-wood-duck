import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InputComponent from '../../src/InputComponent';

const CenterDecorator = (storyFn) => (
  <div className='container' >
    { storyFn() }
  </div>
);

const InputComponentStory = () => (
  <InputComponent
    label='Full Name'
    gridClassName='col-md-12 col-sm-12 col-xs-12' 
    labelClassName='Full Name'
    placeholder='Enter Full Name'
  />
);

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('InputComponent', InputComponentStory);
