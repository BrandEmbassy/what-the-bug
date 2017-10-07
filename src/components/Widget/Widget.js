import React, { Component } from 'react'
import styled from 'styled-components'

import { Button, Tooltip } from 'material-ui'
import { Portal } from 'react-portal'
import { BugReport } from 'material-ui-icons'

const Wrap = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 56px;
  height: 56px;
`

type Props = {
  toggleReporter: func,
}

export default class Widget extends Component {
  props: Props;

  render () {
    return (
      <Portal>
        <Wrap>
          <Tooltip style={{whiteSpace: 'nowrap'}} id="tooltip-icon" title="Report a bug" placement="left">
            <Button onClick={this.props.toggleReporter} fab color='primary' aria-label='add'>
              <BugReport />
            </Button>
          </Tooltip>
        </Wrap>
      </Portal>
    )
  }
}
