import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Typography, Paper } from 'material-ui'

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`

const Img = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`

class AttachmentsTab extends Component {
  render() {
    return (
      <Wrap>
        <Typography type={'body2'} gutterBottom>
          Screenshot
        </Typography>
        {this.props.appStore.reporter.attachments.map((attachment, index) => {
          switch (attachment.mimeType) {
            case 'image/png':
              return <Img>
                  <Paper elevation={4} key={index}>
                    <img width="100%" src={attachment.plainText} alt="" />
                  </Paper>
                </Img>
          }
        })}
      </Wrap>
    )
  }
}

export default inject('appStore')(observer(AttachmentsTab))
