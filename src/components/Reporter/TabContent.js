import React, { Component } from 'react';
import styled from 'styled-components';
import BrowserInfo from '../../BrowserInfo'

import GeneralTab from './GeneralTab';
import AttachmentsTab from "./AttachmentsTab"

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

type Props = {
  tabId: number
};

class TabContent extends Component {
  props: Props;

  renderTabContent = () => {
    switch (this.props.tabId) {
      case 0:
        return <GeneralTab />;
      case 1:
        return <BrowserInfo />
      case 2:
        return <AttachmentsTab />
      default:
    }
  };

  render() {
    return <Wrap>{this.renderTabContent()}</Wrap>;
  }
}

export default TabContent;
