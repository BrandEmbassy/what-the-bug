// @flow
import React, {Component} from 'react'
import styled from 'styled-components'
import {inject, observer} from 'mobx-react'

import {Paper} from 'material-ui'
import {Portal} from 'react-portal'
import TabsContainer from './TabsContainer'
import {createPost} from '../../api.js'

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: auto;
`

type Props = {
  toggleReporter: func
};

class Reporter extends Component {
  props: Props

  sendReport = () => {
    const reporter = this.props.appStore.reporter
    const content = reporter.desc + '\n\n' +
      'Browser: ' + reporter.browserName + '\n' +
      'Browser Version: ' + reporter.browserVersion + '\n' +
      'OS: ' + reporter.osName + '\n'

    createPost('WAT? The bug?', content, {id: reporter.email, name: 'Meganasratý zákoš'})
  }

  render () {
    return (
      <Portal>
        <Wrap>
          <Overlay onClick={this.props.toggleReporter} />
          <Box>
            <Paper>
              <TabsContainer
                onCancelClick={this.props.toggleReporter}
                sendReport={this.sendReport}
                onTabClick={this.props.onTabClick}
                tabId={this.props.tabId}
              />
            </Paper>
          </Box>
        </Wrap>
      </Portal>
    )
  }
}

export default inject('appStore')(observer(Reporter))
