'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeDnd = require('bee-dnd');

var _beeDnd2 = _interopRequireDefault(_beeDnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
   * 传给dialog的classname
   */
  dialogClassName: _propTypes2["default"].string,
  contentStyle: _propTypes2["default"].object

};

var defaultProps = {
  clsPrefix: 'u-modal'
};

var ModalDialog = function (_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, ModalDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onStart = function () {
      var draggable = _this.props.draggable;

      return draggable;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ModalDialog.prototype.render = function render() {
    var _dialogClasses;

    var _props = this.props,
        dialogClassName = _props.dialogClassName,
        className = _props.className,
        clsPrefix = _props.clsPrefix,
        size = _props.size,
        style = _props.style,
        contentStyle = _props.contentStyle,
        children = _props.children,
        draggable = _props.draggable,
        props = _objectWithoutProperties(_props, ['dialogClassName', 'className', 'clsPrefix', 'size', 'style', 'contentStyle', 'children', 'draggable']);
    // const [bsProps, elementProps] = splitBsProps(props);
    //


    var uClassName = _defineProperty({}, '' + clsPrefix, true);

    var modalStyle = { display: 'block' };

    var dialogClasses = (_dialogClasses = {}, _defineProperty(_dialogClasses, uClassName, false), _defineProperty(_dialogClasses, clsPrefix + '-dialog', true), _dialogClasses);
    if (size) {
      dialogClasses[clsPrefix + '-' + size] = true;
    }
    if (draggable) {
      dialogClasses[clsPrefix + '-draggable'] = true;
    }

    return _react2["default"].createElement(
      'div',
      _extends({}, props, {
        tabIndex: '-1',
        role: 'dialog',
        style: modalStyle,
        className: (0, _classnames2["default"])(className, uClassName)
      }),
      _react2["default"].createElement(
        'div',
        { className: (0, _classnames2["default"])(dialogClassName, dialogClasses), style: style },
        _react2["default"].createElement(
          _beeDnd2["default"],
          { handle: '.dnd-handle', cancel: '.dnd-cancel', onStart: this.onStart, onStop: this.onStop },
          _react2["default"].createElement(
            'div',
            { style: contentStyle, className: (0, _classnames2["default"])([clsPrefix + '-content']), role: 'document' },
            children
          )
        )
      )
    );
  };

  return ModalDialog;
}(_react2["default"].Component);

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

exports["default"] = ModalDialog;
module.exports = exports['default'];