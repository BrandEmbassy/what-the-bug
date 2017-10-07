import { types } from 'mobx-state-tree';
import browserInfo from 'browser-info';

export var ReportStore = types.model('ReportStore', {
  browserName: '',
  browserVersion: '',
  osName: '',

  email: '',
  desc: '',
  attachments: types.array(types.string)
}).actions(function (self) {
  return {
    afterCreate: function afterCreate() {
      console.log('creating broser info');
      var browser = browserInfo();

      self.browserName = browser.name + ' ' + browser.version;
      self.browserVersion = browser.fullVersion;
      self.osName = browser.os;
    },
    setEmail: function setEmail(email) {
      self.email = email;
    },
    setDesc: function setDesc(desc) {
      self.desc = desc;
    },
    addAttachment: function addAttachment(attachment) {
      self.attachments.push(attachment);
    }
  };
});