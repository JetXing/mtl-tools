/**
* This source code is quoted from rc-switch.
* homepage: https://github.com/react-component/switch
*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
  clsPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  checkedChildren: PropTypes.any,
  unCheckedChildren: PropTypes.any,
  onChangeHandler: PropTypes.func,
  onChange: PropTypes.func
};
const defaultProps = {
  clsPrefix: "u-switch",
  checkedChildren: null,
  unCheckedChildren: null,
  defaultChecked: false,
  size: "",
  disabled: false,
  onChangeHandler: function() {},
  onChange: function() {}
};
class Switch extends Component {
  constructor(props) {
    super(props);
    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else if('defaultValue' in props) {
      checked = !!props.defaultValue;
    } else{
      checked = !!props.defaultChecked;
    }
    this.state = { checked };
  }
  componentWillReceiveProps(nextProps, nextState) {
    if ("checked" in nextProps) {
      this.setState({ checked: !!nextProps.checked });
    }
  }
  setChecked=(checked)=>{
    if (this.props.disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked,
      });
    }
    this.props.onChangeHandler(checked);
    this.props.onChange(checked);
  }
  //点击switch改变状态
  clickHandler = () => {
    const checked = !this.state.checked;
    this.setChecked(checked);
  };
  handleKeyDown = (e) => {
    if (e.keyCode === 37) { // Left
      this.setChecked(false);
    } else if (e.keyCode === 39) { // Right
      this.setChecked(true);
    } else if (e.keyCode === 32 || e.keyCode === 13) { // Space, Enter
      this.clickHandler();
    }
  }
  // Handle auto focus when click switch in Chrome
  handleMouseUp = (e) => {
    if (this.node) {
      this.node.blur();
    }
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }
  saveNode = (node) => {
    this.node = node;
  }
  render() {
    const {
      checkedChildren,
      unCheckedChildren,
      onChangeHandler,
      size,
      className,
      clsPrefix,
      disabled,
      colors,
      ...others
    } = this.props;
    //获取checked
    const checked = this.state.checked;
    let classes = {
      "is-checked": checked
    };
    if (size) {
      classes[`${clsPrefix}-${size}`] = true;
    }
    if (colors) {
      classes[`${clsPrefix}-${colors}`] = true;
    }
    classes[[`${clsPrefix}-disabled`]] = disabled;

    let classNames = classnames(clsPrefix, classes);

    return (
      <span className={disabled && checked ? `${clsPrefix}-backdrop` : ''}>
        <span
          {...others}
          ref={this.saveNode}
          onClick={this.clickHandler}
          onKeyDown={this.handleKeyDown}
          onMouseUp={this.handleMouseUp}
          className={classnames(className, classNames)}
          tabIndex={disabled ? -1 : 0}
        >
          <span className={`${clsPrefix}-inner`}>
            {checked ? checkedChildren : unCheckedChildren}
          </span>
        </span>
      </span>
    );
  }
}
Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
export default Switch;
