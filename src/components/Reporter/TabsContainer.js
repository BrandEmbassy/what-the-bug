// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { withStyles } from 'material-ui/styles'

import TabContent from './TabContent'
import { AppBar, Tabs, Tab, Button, Typography } from 'material-ui'
import { BugReport } from 'material-ui-icons'

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const Div = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`

const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`
const Flex = styled.div`
  position: relative;
  flex: 0 1 auto;
  margin-right: 10px;
  box-sizing: border-box;
`


const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit
  }
})

class TabsContainer extends Component {
  handleChange = (e, id) => {
    this.props.onTabClick(id)
  }

  handleChangeIndex = index => {
    this.props.onTabClick(index)
  }

  handleSendClick = () => {
    if (!this.props.validData) {
      return;
    }

    this.props.sendReport();
  }

  render() {
    return (
      <Wrap>
        <AppBar position="static" color="default">
          <Header>
            <Flex>
              <BugReport />
            </Flex>
            <Flex>
              <Typography type="title">Bug Reporter</Typography>
            </Flex>
          </Header>
          <Tabs
            value={this.props.tabId}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="General" />
            <Tab label="Diagnostics" />
            <Tab label="Attachments" />
          </Tabs>
        </AppBar>
        <TabContent tabId={this.props.tabId} onChange={this.handleChangeIndex} />
        <Div>
          <Button
            onClick={this.props.sendReport}
            className={this.props.classes.button}
            raised
            color="primary"
            disabled={!this.props.validData}
          >
            Send
          </Button>
          <Button onClick={this.props.onCancelClick}>Cancel</Button>
        </Div>
      </Wrap>
    )
  }
}

export default withStyles(styles)(TabsContainer)
