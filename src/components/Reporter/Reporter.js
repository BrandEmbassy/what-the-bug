// @flow
import React, {Component} from 'react'
import styled from 'styled-components'
import {inject, observer} from 'mobx-react'

import {Paper} from 'material-ui'
import TabsContainer from './TabsContainer'
import {createPost, addAttachments} from '../../api.js'

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000;
`

const Overlay = styled.div`
  position: aboslute;
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
  transition: height .18s;
`

type Props = {
  toggleReporter: func
};

class Reporter extends Component {
  props: Props

  sendReport = () => {
    const reporter = this.props.appStore.reporter
    const sender = this.props.appStore.sender
    const content = reporter.description + '\n\n' +
      'Browser: ' + reporter.browser.name + '\n' +
      'Browser Version: ' + reporter.browser.version + '\n' +
      'OS: ' + reporter.osName + '\n'

    createPost(sender.reportUrl, sender.channelId, 'Bug Report by WTB', content, {id: reporter.email, name: 'Agent'}).then((postId) => {
      const attachmentUrl = `${sender.reportUrl}/${postId}/attachments`
      addAttachments(attachmentUrl, reporter.attachments).then(() => {
        this.props.toggleReporter()
      })
    })
  }

  render () {
    return (
      <Wrap>
        <Overlay onClick={this.props.toggleReporter} />
        <Box>
          <Paper>
            <TabsContainer
              validData={this.props.appStore.reporter.validUserInput}
              onCancelClick={this.props.toggleReporter}
              sendReport={this.sendReport}
              onTabClick={this.props.onTabClick}
              tabId={this.props.tabId}
            />
          </Paper>
        </Box>
      </Wrap>
    )
  }
}

export default inject('appStore')(observer(Reporter))
