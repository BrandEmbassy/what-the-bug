import { types, getEnv } from "mobx-state-tree"
import { UiStore } from "./UiStore"
import { GeneralStore } from "./GeneralStore"
import { ReportStore } from './ReportStore';


export const AppStore = types
    .model("AppStore", {
        ui: types.optional(UiStore, {
          isOpen: false,
          tabId: 0
        }),
        general: types.optional(GeneralStore, {
          email: '',
          desc: '',
        }),
        reportStore: types.optional(ReportStore, {}),
    })
    .views(self => ({
        get alert() {
            return getEnv(self).alert
        },
    }))
    .actions(self => ({
    }))
