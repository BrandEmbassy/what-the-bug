// @flow
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Widget from './components/Widget/Widget'
import Reporter from './components/Reporter/Reporter'
import * as html2canvas from 'html2canvas'
import 'typeface-roboto'

class App extends Component {
  toggleReporter = () => {
    this.screenshot()
    this.props.appStore.ui.toggleReporter()
  }

  setTab = tabId => {
    console.log(tabId)
    this.props.appStore.ui.setTab(tabId)
  }

  renderReporter = () => {
    if (this.props.appStore.ui.isOpen) {
      return (
        <Reporter
          toggleReporter={this.toggleReporter}
          onTabClick={this.setTab}
          tabId={this.props.appStore.ui.tabId}
        />
      )
    }
    return null
  }

  screenshot = () => {
    html2canvas(document.body).then((canvas) => {
      const screenshot = canvas.toDataURL('image/png')
      this.props.appStore.reporter.addAttachment(screenshot)
    })
  }

  render () {
    return (
        <div>
          <Widget toggleReporter={this.toggleReporter} />
          {this.renderReporter()}
        </div>
    )
  }
}

export default inject('appStore')(observer(App))
