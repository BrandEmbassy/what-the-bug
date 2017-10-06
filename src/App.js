import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FirstComponent from './FirstComponent';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <FirstComponent />
      </MuiThemeProvider>
    );
  }
}
