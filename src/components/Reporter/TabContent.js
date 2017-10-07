import React, { Component } from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views';

import DiagnosticsTab from './DiagnosticsTab'
import GeneralTab from './GeneralTab'
import AttachmentsTab from './AttachmentsTab'

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`

type Props = {
  tabId: number,
  onChange: func
};

class TabContent extends Component {
  props: Props;

  render () {
    return <Wrap>
      <SwipeableViews index={this.props.tabId} onChangeIndex={this.onChange}>
        <GeneralTab />
        <DiagnosticsTab />
        <AttachmentsTab />
      </SwipeableViews>
    </Wrap>
  }
}

export default TabContent
