var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Widget from './components/Widget/Widget';
import Reporter from './components/Reporter/Reporter';
import * as html2canvas from 'html2canvas';
import 'typeface-roboto';

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.toggleReporter = function () {
      _this.screenshot();
      _this.props.appStore.ui.toggleReporter();
    }, _this.setTab = function (tabId) {
      console.log(tabId);
      _this.props.appStore.ui.setTab(tabId);
    }, _this.renderReporter = function () {
      if (_this.props.appStore.ui.isOpen) {
        return React.createElement(Reporter, {
          toggleReporter: _this.toggleReporter,
          onTabClick: _this.setTab,
          tabId: _this.props.appStore.ui.tabId
        });
      }
      return null;
    }, _this.screenshot = function () {
      html2canvas(document.body).then(function (canvas) {
        var screenshot = canvas.toDataURL('image/png');
        _this.props.appStore.reporter.addAttachment(screenshot);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        MuiThemeProvider,
        null,
        React.createElement(Widget, { toggleReporter: this.toggleReporter }),
        this.renderReporter()
      );
    }
  }]);

  return App;
}(Component);

export default inject('appStore')(observer(App));