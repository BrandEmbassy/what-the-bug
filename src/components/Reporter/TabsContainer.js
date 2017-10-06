import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import TabContent from './TabContent';

import { AppBar, Tabs, Tab } from 'material-ui';

const Div = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

class TabsContainer extends Component {
  constructor() {
    super();

    this.tabState = observable({
      tabId: 0
    });
  }

  handleChange = (e, id) => {
    this.tabState.tabId = id;
  };

  render() {
    return (
      <Div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.tabState.tabId}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
          </Tabs>
        </AppBar>
        <TabContent tabId={this.tabState.tabId} />
      </Div>
    );
  }
}

export default observer(TabsContainer);
