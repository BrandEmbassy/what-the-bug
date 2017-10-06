// @flow
import React, { Component } from 'react'
import View from './View'

class ReportForm extends Component<any, any> {

  onSubmit = (e: Event) => {
    e.preventDefault()
    console.log(e.target);
  }

  render(): JSX.Element {
    const {onSubmit} = this.props;
    return <View onSubmit={this.onSubmit} />
  }

}

export default ReportForm
