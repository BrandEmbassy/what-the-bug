import { types } from 'mobx-state-tree'
import browserInfo from 'browser-info'

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const ReportStore = types
  .model('ReportStore', {
    browserName: '',
    browserVersion: '',
    osName: '',

    email: '',
    desc: '',
    attachments: types.array(types.string)
  })
  .views(self => ({
    get validUserInput () {
      return self.email !== '' && self.desc !== '' && validateEmail(self.email);
    }
  }))
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
