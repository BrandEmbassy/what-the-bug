import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'material-ui';
import { Portal } from 'react-portal';
import { BugReport } from 'material-ui-icons';

const Wrap = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 56px;
  height: 56px;
`;

export default class Widget extends Component {
  render() {
    return (
      <Portal>
        <Wrap>
          <Button fab color="primary" aria-label="add">
            <BugReport />
          </Button>
        </Wrap>
      </Portal>
    );
  }
}
