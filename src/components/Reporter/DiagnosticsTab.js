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
    const reporter = this.props.appStore.reporter;

    return (
      <Wrap>
        <Typography type="body2">System info:</Typography>
        <ul>
          <li>{reporter.browser.name} (<small>{reporter.browser.version}</small>)</li>
          <li>{reporter.osName}</li>
        </ul>

        <Typography type="body2">Performance</Typography>
        <textarea disabled style={{width: '650px', height: '300px'}}>
          {JSON.stringify(reporter.windowPerformance, null, 2)}
        </textarea>
      </Wrap>
    )
  }
}

export default inject('appStore')(observer(DiagnosticsTab))
