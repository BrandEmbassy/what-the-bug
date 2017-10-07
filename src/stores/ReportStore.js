import { types } from 'mobx-state-tree'
import browserInfo from 'browser-info'

export const ReportStore = types
  .model('ReportStore', {
    browserName: '',
    browserVersion: '',
    osName: '',

    email: '',
    desc: '',
    attachments: types.array(types.string)
  })
  .actions(self => ({

    afterCreate () {
      console.log('creating broser info')
      const browser = browserInfo()

      self.browserName = `${browser.name} ${browser.version}`
      self.browserVersion = browser.fullVersion
      self.osName = browser.os
    },

    setEmail (email) {
      self.email = email
    },

    setDesc (desc) {
      self.desc = desc
    },

    addAttachment (attachment) {
      self.attachments.push(attachment)
    },

    deleteAttachments () {
      self.attachments = [];
    }

  }))
