import React from 'react';
import { inject, observer } from 'mobx-react';

function BrowserInfo(_ref) {
  var reporter = _ref.appStore.reporter;

  return React.createElement(
    'dl',
    null,
    React.createElement(
      'dt',
      null,
      'Browser'
    ),
    React.createElement(
      'dl',
      null,
      reporter.browserName,
      React.createElement(
        'small',
        null,
        '(version: ',
        reporter.browserVersion,
        ')'
      )
    ),
    React.createElement(
      'dt',
      null,
      'Operating system'
    ),
    React.createElement(
      'dl',
      null,
      reporter.osName
    )
  );
}

export default inject('appStore')(observer(BrowserInfo));