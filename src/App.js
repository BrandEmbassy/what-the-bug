// @flow
import React, { Component } from 'react';
import ReportForm from './ReportForm';

class App extends Component {

  onSubmit(event: SyntheticEvent): void {
    event.preventDefault();
    console.log(event.target.description.value)
  }

  render() {
    return (
      <ReportForm onSubmit={this.onSubmit} />
    );
  }
}

export default App;
