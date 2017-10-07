// @flow
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { deepOrange } from 'material-ui/colors'
import Widget from './components/Widget/Widget'
import Reporter from './components/Reporter/Reporter'
import * as html2canvas from 'html2canvas'
import 'typeface-roboto'

const theme = createMuiTheme({
  palette: {
    primary: deepOrange
  }
})

class App extends Component {
  toggleReporter = () => {
    if (!this.props.appStore.ui.isOpen) {
      this.props.appStore.reporter.deleteAttachments();
      this.screenshot()
    }

    this.props.appStore.ui.toggleReporter()
  }

  setTab = tabId => {
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
    html2canvas(document.body).then(canvas => {
      const screenshot = canvas.toDataURL('image/png')
      this.props.appStore.reporter.addAttachment(screenshot)
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Widget toggleReporter={this.toggleReporter} />
          {this.renderReporter()}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default inject('appStore')(observer(App))
