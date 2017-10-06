import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Widget from './Widget/Widget';
import Reporter from './Reporter/Reporter';

export default class App extends Component {
  renderWidget = (param) => {
    if (param) {
      return <Widget />;
    }

    return <Reporter />;
  };
  render() {
    return (
      <MuiThemeProvider>
        {this.renderWidget(true)}
        {this.renderWidget(false)}
      </MuiThemeProvider>
    );
  }
}
