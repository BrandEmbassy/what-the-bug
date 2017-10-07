import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'

import { Typography } from 'material-ui'

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

class DiagnosticsTab extends Component {
  render() {

    return (
      <Wrap>
        <Typography type="body2">Browser</Typography>
        <Typography gutterBottom>{this.props.appStore.reporter.browserName} version: {this.props.appStore.reporter.browserVersion}</Typography>

        <Typography type="body2">Operating System</Typography>
        <Typography>{this.props.appStore.reporter.osName}</Typography>

      </Wrap>
    )
  }
}

export default inject('appStore')(observer(DiagnosticsTab))
