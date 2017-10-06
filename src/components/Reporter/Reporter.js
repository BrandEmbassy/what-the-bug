import React, { Component } from 'react';
import styled from 'styled-components';

import { Paper } from 'material-ui';
import { Portal } from 'react-portal';
import TabsContainer from './TabsContainer';

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: auto;
`;

type Props = {
  toggleReporter: func
};

export default class Reporter extends Component {
  props: Props;

  render() {
    return (
      <Portal>
        <Wrap>
          <Overlay onClick={this.props.toggleReporter} />
          <Box>
            <Paper>
              <TabsContainer onTabClick={this.props.onTabClick} tabId={this.props.tabId}/>
            </Paper>
          </Box>
        </Wrap>
      </Portal>
    );
  }
}
