import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

type Props = {
  tabId: number
}

class TabContent extends Component {
  props: Props;
  
  renderTabContent = () => {
    switch (this.props.tabId) {
      case 0:
        return 'KOKOT'
      case 1:
        return 'PICA'
      default:

    }
  }

  render() {
    return (
      <Wrap>
        {this.renderTabContent()}
      </Wrap>
    );
  }
}

export default TabContent;
