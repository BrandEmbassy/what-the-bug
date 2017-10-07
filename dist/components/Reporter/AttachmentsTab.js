var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n'], ['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

var Wrap = styled.div(_templateObject);

var AttachmentsTab = function (_Component) {
  _inherits(AttachmentsTab, _Component);

  function AttachmentsTab() {
    _classCallCheck(this, AttachmentsTab);

    return _possibleConstructorReturn(this, (AttachmentsTab.__proto__ || Object.getPrototypeOf(AttachmentsTab)).apply(this, arguments));
  }

  _createClass(AttachmentsTab, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Wrap,
        null,
        this.props.appStore.reporter.attachments.map(function (attachment) {
          return React.createElement('img', { width: '256', border: '1', src: attachment, alt: '' });
        })
      );
    }
  }]);

  return AttachmentsTab;
}(Component);

export default inject('appStore')(observer(AttachmentsTab));