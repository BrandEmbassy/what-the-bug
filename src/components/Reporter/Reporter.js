import React, { Component } from 'react';
import styled from 'styled-components';

import { Paper } from 'material-ui';
import { Portal } from 'react-portal';
import Container from './Container';

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
  width: 600px;
  height: auto;
`;

type Props = {
  toggleReporter: func
}

export default class Reporter extends Component {
  props: Props;

  render() {
    return (
      <Portal>
          <Wrap>
            <Overlay onClick={this.props.toggleReporter}>
            </Overlay>
            <Box>
              <Paper>
                <Container></Container>
              </Paper>
            </Box>
          </Wrap>
      </Portal>
    );
  }
}
