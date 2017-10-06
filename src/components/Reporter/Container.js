import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import {observable} from 'mobx';

import { AppBar, Tabs, Tab } from 'material-ui';

const Div = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

class Container extends Component {
  constructor() {
    super();
    this.state = observable({
      tabId: 0
    });

  }

  handleChange = (e, id) => {
    this.state.tabId = id;
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    return (
      <Div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.tabId}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
      </Div>
    );
  }
}

export default observer(Container);
