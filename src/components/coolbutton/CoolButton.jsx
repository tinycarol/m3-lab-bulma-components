import React from "react";
import "./CoolButton.css";

// {
//     isActive: 'is-active',
//     isBlack: 'is-black',
//     isCentered: 'is-centered',
//     isDanger: 'is-danger',
//     isDark: 'is-dark',
//     isFocused: 'is-focused',
//     isGrouped: 'is-grouped',
//     isHovered: 'is-hovered',
//     isInfo: 'is-info',
//     isInverted: 'is-inverted',
//     isLarge: 'is-large',
//     isLight: 'is-light',
//     isLink: 'is-link',
//     isLoading: 'is-loading',
//     isMedium: 'is-medium',
//     isOutlined: 'is-outlined',
//     isPrimary: 'is-primary',
//     isRight: 'is-right',
//     isRounded: 'is-rounded',
//     isSelected: 'is-selected',
//     isSmall: 'is-small',
//     isStatic: 'is-static',
//     isSuccess: 'is-success',
//     isText: 'is-text',
//     isWarning: 'is-warning',
//     isWhite: 'is-white',
//   }

const getButtonStyles = (className, isSmall, isDanger, isSuccess) => {
  let currentStyle = "";
  if (className) {
    currentStyle += `${className}`;
  }
  if (!currentStyle.includes("button")) {
    currentStyle += " button";
  }
  if (isSmall) {
    currentStyle += " is-small ";
  }
  if (isDanger) {
    currentStyle += " is-danger ";
  }
  if (isSuccess) {
    currentStyle += " is-success ";
  }
  return currentStyle;
};

export default class CoolButton extends React.Component {
  render() {
    const { className, isSmall, isDanger, isSuccess, children } = this.props;
    return (
      <button
        className={getButtonStyles(className, isSmall, isDanger, isSuccess)}
      >
        {children}
      </button>
    );
  }
}
