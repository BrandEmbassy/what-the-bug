import React from 'react'
import { AppStore } from './stores/AppStore'
import { Provider } from 'mobx-react'
import App from './App'

export default function WhatTheBug({reportUrl, channelId}) {

  const appStore = AppStore.create(
    {},
    {
      alert: m => console.alert(m)
    }
  )

  appStore.sender.setReportUrl(reportUrl)
  appStore.sender.setChannelId(channelId)

  return (
    <Provider appStore={appStore}>
      <App />
    </Provider>
  )
}
