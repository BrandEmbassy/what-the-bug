import { types } from "mobx-state-tree";

export const GeneralStore = types
    .model('GeneralStore', {
      email: types.string,
      desc: types.string
    })
    .views(self => ({

    }))
    .actions(self => ({
      setEmail(email) {
        self.email = email;
      },
      setDesc(desc) {
        self.desc = desc;
      }
    }))
