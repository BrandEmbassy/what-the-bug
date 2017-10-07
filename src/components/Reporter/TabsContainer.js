import React, { Component } from 'react'
import styled from 'styled-components'
import { withStyles } from 'material-ui/styles'

import TabContent from './TabContent'
import { AppBar, Tabs, Tab, Button } from 'material-ui'

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

const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit
  }
})

class TabsContainer extends Component {
  handleChange = (e, id) => {
    this.props.onTabClick(id)
  };

  handleChangeIndex = index => {
    this.props.onTabClick(index)
  }

  render () {
    return (
      <Wrap>
        <AppBar position='static' color='default'>
          <Tabs
            value={this.props.tabId}
            onChange={this.handleChange}
            indicatorColor='primary'
            textColor='primary'
            fullWidth
          >
            <Tab label='General' />
            <Tab label='Diagnostics' />
            <Tab label='Attachments' />
          </Tabs>
        </AppBar>
        <TabContent tabId={this.props.tabId} onChange={this.handleChangeIndex}/>
        <Div>
          <Button className={this.props.classes.button} raised color='primary'>
            Send
          </Button>
          <Button onClick={this.props.onCancelClick}>
            Cancel
          </Button>
        </Div>
      </Wrap>
    )
  }
}

export default withStyles(styles)(TabsContainer)
