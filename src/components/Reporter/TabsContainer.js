import React, { Component } from 'react';
import styled from 'styled-components';

import TabContent from './TabContent';
import { AppBar, Tabs, Tab } from 'material-ui';

const Div = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

class TabsContainer extends Component {
  handleChange = (e, id) => {
    this.props.onTabClick(id);
  };

  render() {
    return (
      <Div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.props.tabId}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="General" />
            <Tab label="Diagnostics" />
          </Tabs>
        </AppBar>
        <TabContent tabId={this.props.tabId} />
      </Div>
    );
  }
}

export default TabsContainer;
