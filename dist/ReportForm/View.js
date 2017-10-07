import React from 'react';
import BrowserInfo from '../BrowserInfo';

function ReportForm(props) {
  var onSubmit = props.onSubmit;


  return React.createElement(
    'form',
    { onSubmit: onSubmit },
    React.createElement('textarea', { name: 'description' }),
    React.createElement('input', { type: 'submit' })
  );
}

export default ReportForm;