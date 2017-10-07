import { types } from 'mobx-state-tree'

export const SenderStore = types
  .model('SenderStore', {
    reportUrl: '',
    channelId: ''
  })

  .actions(self => ({

    setReportUrl (url) {
      self.reportUrl = url
    },

    setChannelId (id) {
      self.channelId = id
    }

  }))
