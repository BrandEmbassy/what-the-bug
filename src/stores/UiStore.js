import { types } from "mobx-state-tree";

export const UiStore = types
    .model('UiStore', {
      isOpen: types.boolean,
      tabId: types.number
    })
    .views(self => ({

    }))
    .actions(self => ({
      toggleReporter() {
        self.isOpen = !self.isOpen;
      },
      setTab(tabId) {
        self.tabId = tabId;
      }
    }))
