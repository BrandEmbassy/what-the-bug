import { types, getEnv } from "mobx-state-tree"
import { UiStore } from "./UiStore"
import { GeneralStore } from "./GeneralStore"

export const AppStore = types
    .model("AppStore", {
        ui: types.optional(UiStore, {
          isOpen: false,
          tabId: 0
        }),
        general: types.optional(GeneralStore, {
          email: '',
          desc: '',
        })
    })
    .views(self => ({
        get alert() {
            return getEnv(self).alert
        },
    }))
    .actions(self => ({
    }))
