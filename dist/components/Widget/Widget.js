var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  width: 56px;\n  height: 56px;\n'], ['\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  width: 56px;\n  height: 56px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from 'material-ui';
import { Portal } from 'react-portal';
import { BugReport } from 'material-ui-icons';

var Wrap = styled.div(_templateObject);

var Widget = function (_Component) {
  _inherits(Widget, _Component);

  function Widget() {
    _classCallCheck(this, Widget);

    return _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).apply(this, arguments));
  }

  _createClass(Widget, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Portal,
        null,
        React.createElement(
          Wrap,
          null,
          React.createElement(
            Button,
            { onClick: this.props.toggleReporter, fab: true, color: 'primary', 'aria-label': 'add' },
            React.createElement(BugReport, null)
          )
        )
      );
    }
  }]);

  return Widget;
}(Component);

export default Widget;