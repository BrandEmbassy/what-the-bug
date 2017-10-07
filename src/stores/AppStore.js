import { types, getEnv } from 'mobx-state-tree'
import { UiStore } from './UiStore'
import { ReportStore } from './ReportStore'
import { SenderStore } from './SenderStore'

export const AppStore = types
  .model('AppStore', {
    ui: types.optional(UiStore, {
      isOpen: false,
      tabId: 0
    }),
    reporter: types.optional(ReportStore, {
      attachments: [],
      windowPerformance: {}
    }),
    sender: types.optional(SenderStore, {
      reportUrl: '',
      channelId: ''
    })
  })
  .views(self => ({
    get alert () {
      return getEnv(self).alert
    }
  }))
  .actions(self => ({
  }))
