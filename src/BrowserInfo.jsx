import React from 'react'
import browserInfo from 'browser-info'

function BrowserInfo() {

  const browser = browserInfo()
  const screen = window.screen

  return (
    <dl>
      <dt>Browser</dt>
      <dd>{browser.name} {browser.version} ({browser.fullVersion})</dd>
      <dt>OS</dt>
      <dd>{browser.os}</dd>
      <dt>Screen</dt>
      <dd>
        {screen.width}px x {screen.height}px
        (available: {screen.availWidth}px x {screen.availHeight}px)
        {screen.colorDepth}bit
      </dd>
    </dl>
  )
}

export default BrowserInfo
