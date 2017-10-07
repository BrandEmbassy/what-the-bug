import { AppStore } from './stores/AppStore'
import App from './App'
import { Provider } from 'mobx-react'

export default function WhatTheBug(reportUrl, channelId) {

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
