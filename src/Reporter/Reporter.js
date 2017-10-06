import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper } from 'material-ui';
import { Portal } from 'react-portal';
import { BugReport } from 'material-ui-icons';

const Wrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
`;

export default class Reporter extends Component {
  render() {
    return (
      <Portal>
        <Wrap>
          <Paper>Reporter what-the-bug</Paper>
        </Wrap>
      </Portal>
    );
  }
}
