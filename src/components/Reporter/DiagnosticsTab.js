import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'

import { Typography, TextField } from 'material-ui'

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
        <Typography type="body2">System</Typography>
        <Typography>{reporter.browser.name} (<small>{reporter.browser.version}</small>)</Typography>
        <Typography gutterBottom>{reporter.osName}</Typography>

        <Typography type="body2">Performance</Typography>
        <TextField
          id='performance'
          multiline
          rowsMax='16'
          value={reporter.attachments[0].plainText}
          margin='normal'
          fullWidth
          disabled
        />
      </Wrap>
    )
  }
}

export default inject('appStore')(observer(DiagnosticsTab))
