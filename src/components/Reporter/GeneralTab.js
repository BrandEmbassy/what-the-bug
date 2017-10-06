import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { TextField } from 'material-ui';

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

class GeneralTab extends Component {
  handleEmailChange = (e) => {
    this.props.appStore.reporter.setEmail(e.target.value)
  }

  handleDescChange = (e) => {
    this.props.appStore.reporter.setDesc(e.target.value)
  }

  render() {
    return (
      <Wrap>
        <TextField
          id="email"
          label="E-mail"
          value={this.props.appStore.reporter.email}
          onChange={this.handleEmailChange}
          margin="normal"
          fullWidth
        />
        <TextField
          id="multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="6"
          value={this.props.appStore.reporter.desc}
          onChange={this.handleDescChange}
          margin="normal"
          fullWidth
        />
      </Wrap>
    );
  }
}

export default inject('appStore')(observer(GeneralTab));
