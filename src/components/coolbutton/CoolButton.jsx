import React from 'react';
import './CoolButton.css';

const styles = (className, isDanger, isSuccess, isSmall) => {
  let currentStyle ="";

  if (className) {
    currentStyle += `${className}`;
  }
  if (!currentStyle.includes('button')) {
    currentStyle += ' button';
  }
  if (isDanger) {
    currentStyle += ' is-danger';
  }
  if (isSuccess) {
    currentStyle += ' is-success';
  }
  if (isSmall) {
    currentStyle += ' is-small';
  }

  return currentStyle;
};

export default class CoolButton extends React.Component {
  render () {
    const { className, isSmall, isDanger, isSuccess, children } = this.props;

    return (
    <button className={styles(className, isDanger, isSmall, isSuccess)}>
      {children}
    </button>
    );
  }
}