import { types, getEnv } from "mobx-state-tree"
import { UiStore } from "./UiStore"

export const AppStore = types
    .model("AppStore", {
        ui: types.optional(UiStore, {
          isOpen: false
        })
    })
    .views(self => ({
        get alert() {
            return getEnv(self).alert
        },
    }))
    .actions(self => ({
    }))
