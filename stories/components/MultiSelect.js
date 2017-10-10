import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import MultiSelect from '../../src/MultiSelect';

const styles = { paddingTop: '20px' };
const CenterDecorator = (storyFn) => (
  <div className='container' style={styles} >
    { storyFn() }
  </div>
);

const MultiSelectStory = () => <MultiSelect />;

storiesOf('Prototypes', module)
  .addDecorator(CenterDecorator)
  .add('MultiSelect', MultiSelectStory);
