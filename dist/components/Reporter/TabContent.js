var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n'], ['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';
import BrowserInfo from '../../BrowserInfo';

import GeneralTab from './GeneralTab';
import AttachmentsTab from './AttachmentsTab';

var Wrap = styled.div(_templateObject);

var TabContent = function (_Component) {
  _inherits(TabContent, _Component);

  function TabContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call.apply(_ref, [this].concat(args))), _this), _this.renderTabContent = function () {
      switch (_this.props.tabId) {
        case 0:
          return React.createElement(GeneralTab, null);
        case 1:
          return React.createElement(BrowserInfo, null);
        case 2:
          return React.createElement(AttachmentsTab, null);
        default:
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabContent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Wrap,
        null,
        this.renderTabContent()
      );
    }
  }]);

  return TabContent;
}(Component);

export default TabContent;