import React from "react";
import "./CoolButton.css";

const getButtonStyles = (
  className,
  isSmall,
  isDanger,
  isSuccess,
  isCentered,
  isDark,
  isFocused,
  isGrouped,
  isHovered,
  isInfo,
  isInverted,
  isLarge,
  isLink,
  isLight,
  isLoading,
  isActive,
  isMedium,
  isOutlined,
  isPrimary,
  isRight,
  isRounded,
  isSelected,
  isText,
  isWarning,
  isWhite
) => {
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
  if (isCentered) {
    currentStyle += " is-centered ";
  }
  if (isDark) {
    currentStyle += " is-dark ";
  }
  if (isFocused) {
    currentStyle += " is-focused ";
  }
  if (isGrouped) {
    currentStyle += " is-grouped ";
  }
  if (isHovered) {
    currentStyle += " is-hovered ";
  }
  if (isInfo) {
    currentStyle += " is-info ";
  }
  if (isInverted) {
    currentStyle += " is-inverted ";
  }
  if (isLarge) {
    currentStyle += " is-large ";
  }
  if (isLight) {
    currentStyle += " is-light ";
  }
  if (isLink) {
    currentStyle += " is-link ";
  }
  if (isLoading) {
    currentStyle += " is-loading ";
  }
  if (isActive) {
    currentStyle += " is-active ";
  }
  if (isMedium) {
    currentStyle += " is-medium ";
  }
  if (isOutlined) {
    currentStyle += " is-outlined ";
  }
  if (isPrimary) {
    currentStyle += " is-primary ";
  }
  if (isRight) {
    currentStyle += " is-right ";
  }
  if (isRounded) {
    currentStyle += " is-rounded ";
  }
  if (isSelected) {
    currentStyle += " is-selected ";
  }
  if (isText) {
    currentStyle += " is-text ";
  }
  if (isWarning) {
    currentStyle += " is-warning ";
  }
  if (isWhite) {
    currentStyle += " is-white ";
  }
  return currentStyle;
};

export default class CoolButton extends React.Component {
  render() {
    const {
      children,
      className,
      isSmall,
      isDanger,
      isSuccess,
      isCentered,
      isDark,
      isFocused,
      isGrouped,
      isHovered,
      isInfo,
      isInverted,
      isLarge,
      isLink,
      isLight,
      isLoading,
      isActive,
      isMedium,
      isOutlined,
      isPrimary,
      isRight,
      isRounded,
      isSelected,
      isText,
      isWarning,
      isWhite,
    } = this.props;
    return (
      <button
        className={getButtonStyles(
          className,
          isSmall,
          isDanger,
          isSuccess,
          isCentered,
          isDark,
          isFocused,
          isGrouped,
          isHovered,
          isInfo,
          isInverted,
          isLarge,
          isLink,
          isLight,
          isLoading,
          isActive,
          isMedium,
          isOutlined,
          isPrimary,
          isRight,
          isRounded,
          isSelected,
          isText,
          isWarning,
          isWhite
        )}
      >
        {children}
      </button>
    );
  }
}
