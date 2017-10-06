import React, {Component} from 'react'
import styled from 'styled-components'
import {inject, observer} from 'mobx-react'

const Wrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`

class AttachmentsTab extends Component {
  render () {
    return (
      <Wrap>
        {this.props.appStore.reporter.attachments.map((attachment) => {
          return <img width='256' border='1' src={attachment} alt='' />
        })}
      </Wrap>
    )
  }
}

export default inject('appStore')(observer(AttachmentsTab))
