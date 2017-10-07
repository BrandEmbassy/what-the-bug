import { types } from 'mobx-state-tree';

export var UiStore = types.model('UiStore', {
  isOpen: types.boolean,
  tabId: types.number
}).views(function (self) {
  return {};
}).actions(function (self) {
  return {
    toggleReporter: function toggleReporter() {
      self.isOpen = !self.isOpen;
    },
    setTab: function setTab(tabId) {
      self.tabId = tabId;
    }
  };
});