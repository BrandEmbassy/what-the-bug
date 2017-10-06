import React, { Component } from 'react';
import styled from 'styled-components';

import { Paper } from 'material-ui';
import { Portal } from 'react-portal';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;
`;

type Props = {
  toggleReporter: func,
}

export default class Reporter extends Component {
  props: Props;

  render() {
    return (
      <Portal>
        <Overlay onClick={this.props.toggleReporter}>
          <Wrap>
            <Paper>ogihfighio</Paper>
          </Wrap>
        </Overlay>
      </Portal>
    );
  }
}
