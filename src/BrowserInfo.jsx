import React from 'react'
import { inject, observer } from 'mobx-react'

function BrowserInfo({appStore: { reportStore }}) {
  return (
    <dl>
      <dt>Browser</dt>
      <dl>{reportStore.browserName}</dl>

      <dt>OS</dt>
      <dl>{reportStore.osName}</dl>
    </dl>
  )
}

export default inject('appStore')(observer(BrowserInfo))
