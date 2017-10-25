import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Alert from '../../src/Alert';

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;

const alert = withInfo(
  `
    #### Alerts Variations
      - Info Alert 

      - Error Alert

    #### Usage
    The info alert should be used to provide information 
    about a card to a user.The error alert should be 
    used to point out a card level issue that would 
    violate a business rule.

    ##### Accessibility

    The error alert should have the appropriate role="alert" attribute.
  `
)(() => (
  <div>
    <Alert
      alertClassName="error"
      alertMessage="Error! This is an error message."
      faIcon="fa-exclamation-triangle"
    />
    <Alert
      alertClassName="warning"
      alertMessage="Warning! Indicates a warning that might need attention."
      faIcon="fa-exclamation-triangle"
    />
    <Alert
      alertClassName="info"
      alertMessage="Heads up! This alert needs your attention, but it's not super important.vertical-align: middle;vertical-align: middle;vertical-align: middle;vertical-align: middle;vertical-align: middle;vertical-align: middle;vertical-align: middle;vertical-align: middle;vertical-align: middle;"
      faIcon="fa-info-circle"
    />
    <Alert
      alertClassName="success"
      alertMessage="Well done! You successfully completed this task."
      faIcon="fa-check-circle"
    />
    <Alert
      alertClassName="error"
      alertMessage="Error it enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      faIcon="fa-exclamation-triangle"
    />
  </div>
));

storiesOf('In Progress', module)
  .addDecorator(CenterDecorator)
  .add('Alert', alert);
