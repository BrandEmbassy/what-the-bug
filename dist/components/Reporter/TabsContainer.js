var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n'], ['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n'], ['\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';

import TabContent from './TabContent';
import { AppBar, Tabs, Tab, Button } from 'material-ui';

var Wrap = styled.div(_templateObject);

var Div = styled.div(_templateObject2);

var styles = function styles(theme) {
  return {
    button: {
      marginRight: theme.spacing.unit
    }
  };
};

var TabsContainer = function (_Component) {
  _inherits(TabsContainer, _Component);

  function TabsContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabsContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabsContainer.__proto__ || Object.getPrototypeOf(TabsContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, id) {
      _this.props.onTabClick(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabsContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Wrap,
        null,
        React.createElement(
          AppBar,
          { position: 'static', color: 'default' },
          React.createElement(
            Tabs,
            {
              value: this.props.tabId,
              onChange: this.handleChange,
              indicatorColor: 'primary',
              textColor: 'primary',
              fullWidth: true
            },
            React.createElement(Tab, { label: 'General' }),
            React.createElement(Tab, { label: 'Diagnostics' }),
            React.createElement(Tab, { label: 'Attachments' })
          )
        ),
        React.createElement(TabContent, { tabId: this.props.tabId }),
        React.createElement(
          Div,
          null,
          React.createElement(
            Button,
            { className: this.props.classes.button, raised: true, color: 'primary' },
            'Send'
          ),
          React.createElement(
            Button,
            null,
            'Cancel'
          )
        )
      );
    }
  }]);

  return TabsContainer;
}(Component);

export default withStyles(styles)(TabsContainer);