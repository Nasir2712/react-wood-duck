import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import DropDownField from '../../src/DropDownField';

const CenterDecorator = (storyFn) => (
  <div className='container' >
    { storyFn() }
  </div>
);
let data = [
    'Sojourner Truth', 
    'Frederick Douglass', 
    'Booker T. Washington'
];

const DropDownFieldStory = () => (
  <DropDownField
    label='Select'
    gridClassName='col-md-12 col-sm-12 col-xs-12'
    name="Characters"
    options={data}
    selectedOption=""
    handleOnChange={e => this.setSate({ value: e.target.value })}
    placeholder="Choose a Person"
  />
);

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('DropDownField', DropDownFieldStory);
