import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import { Button, Tooltip } from 'material-ui'
import { BugReport } from 'material-ui-icons'

const Wrap = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 56px;
  height: 56px;
  z-index: 10000000;
`

type Props = {
  toggleReporter: func,
}

class Widget extends Component {
  props: Props;

  render () {
    return (

      <Wrap>
        <Tooltip style={{whiteSpace: 'nowrap'}} id="tooltip-icon" title="Report a bug" placement="left">
          <Button onClick={this.props.toggleReporter} fab color='primary' aria-label='add'>
            <BugReport />
          </Button>
        </Tooltip>
      </Wrap>

    )
  }
}

export default inject('appStore')(observer(Widget))
