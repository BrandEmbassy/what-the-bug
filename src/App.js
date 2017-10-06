// @flow
import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Widget from './components/Widget/Widget';
import Reporter from './components/Reporter/Reporter';
import ReportForm from './ReportForm';

class App extends Component {

  toggleReporter = () => {
    this.props.appStore.ui.toggleReporter();
  };

  setTab = tabId => {
    console.log(tabId);
    this.props.appStore.ui.setTab(tabId);
  };

  renderReporter = () => {
    if (this.props.appStore.ui.isOpen) {
      return (
        <Reporter
          toggleReporter={this.toggleReporter}
          onTabClick={this.setTab}
          tabId={this.props.appStore.ui.tabId}
        />
      );
    }
    return null;
  };

  renderWidget = (param) => {
    if (param) {
      return <Widget />;
    }

    return null;
  };

  render() {
    return (
      <MuiThemeProvider>
        <Widget toggleReporter={this.toggleReporter} />
        {this.renderReporter()}
        <ReportForm />
      </MuiThemeProvider>
    );
  }
}

export default inject('appStore')(observer(App));
