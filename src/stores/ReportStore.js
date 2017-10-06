import { types } from 'mobx-state-tree'
import browserInfo from 'browser-info'

export const ReportStore = types
  .model('ReportStore', {
    browserName: '',
    browserVersion: '',
    osName: '',
  })
  .actions(self => ({

    afterCreate() {
      console.log('creating broser info')
      const browser = browserInfo()

      self.browserName = `${browser.name} ${browser.version}`,
      self.browserVersion =  browser.fullVersion,
      self.osName = browser.os
    }

  }));

