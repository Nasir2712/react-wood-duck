import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import MultiSelect from '../../src/MultiSelect';

const CenterDecorator = (storyFn) => (
  <div className='container' >
    { storyFn() }
  </div>
);

const MultiSelectStory = () => <MultiSelect />;

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('MultiSelect', MultiSelectStory);
