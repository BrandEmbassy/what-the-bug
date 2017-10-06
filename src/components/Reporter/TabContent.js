import React, { Component } from 'react';
import styled from 'styled-components';
import BrowserInfo from '../../BrowserInfo'
import ReportForm from '../../ReportForm';

import GeneralTab from './GeneralTab';

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
      default:
    }
  };

  render() {
    return <Wrap>{this.renderTabContent()}</Wrap>;
  }
}

export default TabContent;
