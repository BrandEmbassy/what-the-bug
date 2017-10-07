import { types, getEnv } from 'mobx-state-tree';
import { UiStore } from './UiStore';
import { ReportStore } from './ReportStore';

export var AppStore = types.model('AppStore', {
  ui: types.optional(UiStore, {
    isOpen: false,
    tabId: 0
  }),
  reporter: types.optional(ReportStore, { attachments: [] })
}).views(function (self) {
  return {
    get alert() {
      return getEnv(self).alert;
    }
  };
}).actions(function (self) {
  return {};
});