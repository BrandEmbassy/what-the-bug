import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Widget from './components/Widget/Widget';
import Reporter from './components/Reporter/Reporter';

class App extends Component {
  toggleReporter = () => {
    this.props.appStore.ui.toggleReporter();
  };

  renderReporter = () => {
    if (this.props.appStore.ui.isOpen) {
      return <Reporter toggleReporter={this.toggleReporter}/>;
    }

    return null;
  };

  render() {
    return (
      <MuiThemeProvider>
        <Widget toggleReporter={this.toggleReporter} />
        {this.renderReporter()}
      </MuiThemeProvider>
    );
  }
}

export default inject('appStore')(observer(App));
