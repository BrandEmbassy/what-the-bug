import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Paper } from 'material-ui';
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
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <Portal>
        <Wrap>
          <Paper>goijfoib noifoifjoij</Paper>
        </Wrap>
      </Portal>
    );
  }
}
