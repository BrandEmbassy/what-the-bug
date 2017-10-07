var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n'], ['\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.7;\n'], ['\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.7;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 700px;\n  height: auto;\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 700px;\n  height: auto;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';

import { Paper } from 'material-ui';
import { Portal } from 'react-portal';
import TabsContainer from './TabsContainer';

var Wrap = styled.div(_templateObject);

var Overlay = styled.div(_templateObject2);

var Box = styled.div(_templateObject3);

var Reporter = function (_Component) {
  _inherits(Reporter, _Component);

  function Reporter() {
    _classCallCheck(this, Reporter);

    return _possibleConstructorReturn(this, (Reporter.__proto__ || Object.getPrototypeOf(Reporter)).apply(this, arguments));
  }

  _createClass(Reporter, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Portal,
        null,
        React.createElement(
          Wrap,
          null,
          React.createElement(Overlay, { onClick: this.props.toggleReporter }),
          React.createElement(
            Box,
            null,
            React.createElement(
              Paper,
              null,
              React.createElement(TabsContainer, { onTabClick: this.props.onTabClick, tabId: this.props.tabId })
            )
          )
        )
      );
    }
  }]);

  return Reporter;
}(Component);

export default Reporter;