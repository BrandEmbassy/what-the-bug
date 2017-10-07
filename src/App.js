// @flow
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { deepOrange } from 'material-ui/colors'
import Widget from './components/Widget/Widget'
import Reporter from './components/Reporter/Reporter'
import browserInfo from 'browser-info'
import * as html2canvas from 'html2canvas'
import 'typeface-roboto'

const uuidv4 = require('uuid/v4')
const b64toBlob = require('b64-to-blob')

const theme = createMuiTheme({
  palette: {
    primary: deepOrange
  }
})

class App extends Component {
  toggleReporter = () => {
    if (!this.props.appStore.ui.isOpen) {
      this.props.appStore.reporter.deleteAttachments()
      this.screenshot()
      this.browser()
      this.performance()
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
      const base64Url = canvas.toDataURL('image/png')
      const id = uuidv4()
      const base64Data = base64Url.split(';base64,')[1]
      const blob = b64toBlob(base64Data, 'image/png')

      this.props.appStore.reporter.addAttachment({
        id: id,
        content: blob,
        filename: `screenshot-${id}.png`,
        plainText: base64Url,
        mimeType: 'image/png'
      })
    })
  }

  browser = () => {
    const reporter = this.props.appStore.reporter
    const browser = browserInfo()
    reporter.browser.setName(`${browser.name} ${browser.version}`)
    reporter.browser.setVersion(browser.fullVersion)
    reporter.setOsName(browser.os)
  }

  performance = () => {
    const plainText = JSON.stringify(window.performance, null, 2)

    this.props.appStore.reporter.addAttachment({
      id: 'performance',
      content: new Blob([plainText]),
      filename: 'performance.json',
      plainText: plainText,
      mimeType: 'application/json'
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
