import { AppStore } from './stores/AppStore'
import App from './App'
import { Provider } from 'mobx-react'

export default function WhatTheBug() {

  const appStore = AppStore.create(
    {},
    {
      alert: m => console.alert(m)
    }
  )

  return (
    <Provider appStore={appStore}>
      <App />
    </Provider>
  )
}
