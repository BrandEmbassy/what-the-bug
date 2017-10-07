var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n'], ['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { TextField } from 'material-ui';

var Wrap = styled.div(_templateObject);

var GeneralTab = function (_Component) {
  _inherits(GeneralTab, _Component);

  function GeneralTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GeneralTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GeneralTab.__proto__ || Object.getPrototypeOf(GeneralTab)).call.apply(_ref, [this].concat(args))), _this), _this.handleEmailChange = function (e) {
      _this.props.appStore.reporter.setEmail(e.target.value);
    }, _this.handleDescChange = function (e) {
      _this.props.appStore.reporter.setDesc(e.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GeneralTab, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Wrap,
        null,
        React.createElement(TextField, {
          id: 'email',
          label: 'E-mail',
          value: this.props.appStore.reporter.email,
          onChange: this.handleEmailChange,
          margin: 'normal',
          fullWidth: true
        }),
        React.createElement(TextField, {
          id: 'multiline-flexible',
          label: 'Multiline',
          multiline: true,
          rowsMax: '6',
          value: this.props.appStore.reporter.desc,
          onChange: this.handleDescChange,
          margin: 'normal',
          fullWidth: true
        })
      );
    }
  }]);

  return GeneralTab;
}(Component);

export default inject('appStore')(observer(GeneralTab));