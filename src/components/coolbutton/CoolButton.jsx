import React from "react";

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
