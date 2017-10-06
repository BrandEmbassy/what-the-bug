import { types } from 'mobx-state-tree'
import { BrowserStore } from './BrowserStore'

const ReportStore = types
  .model(
    browserStore: types.optional(BrowserStore, {})
  )
  .views()
  .actions(self => ({
    afterCreate() {
        self.browserStore.loadInfo()
    }
  }))

