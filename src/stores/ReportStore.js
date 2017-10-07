import { types } from 'mobx-state-tree'

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)
}

const BrowserStore = types
  .model('BrowserStore', {
    name: '',
    version: ''
  })
  .actions(self => ({

    setName (name) {
      self.name = name
    },

    setVersion (version) {
      self.version = version
    }

  }))

const ReportStore = types
  .model('ReportStore', {
    browser: types.optional(BrowserStore, {
      name: '',
      version: ''
    }),
    osName: '',
    windowPerformance: types.frozen,

    email: '',
    description: '',
    attachments: types.array(types.string)
  })
  .views(self => ({
    get validUserInput () {
      return self.email !== '' && self.desc !== '' && validateEmail(self.email);
    }
  }))
  .actions(self => ({

    setWindowPerformance(windowPerformance) {
      self.windowPerformance = windowPerformance
    },

    setOsName(osName) {
      self.osName = osName
    },

    setEmail (email) {
      self.email = email
    },

    setDesc (description) {
      self.description = description
    },

    addAttachment (attachment) {
      self.attachments.push(attachment)
    },

    deleteAttachments () {
      self.attachments = [];
    }

  }))

export {
  BrowserStore,
  ReportStore
}
