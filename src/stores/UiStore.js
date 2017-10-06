import { types } from "mobx-state-tree"

export const UiStore = types
    .model('UiStore', {
      isOpen: types.boolean
    })
    .views(self => ({

    }))
    .actions(self => ({
      toggleReporter() {
        self.isOpen = !self.isOpen;
      }
    }))
