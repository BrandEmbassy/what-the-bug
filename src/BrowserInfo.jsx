import React from 'react'
import { inject, observer } from 'mobx-react'

function BrowserInfo({appStore: { reporter }}) {
  return (
    <dl>
      <dt>Browser</dt>
      <dl>
        {reporter.browserName}
        <small>(version: {reporter.browserVersion})</small>
      </dl>


      <dt>Operating system</dt>
      <dl>{reporter.osName}</dl>
    </dl>
  )
}

export default inject('appStore')(observer(BrowserInfo))
