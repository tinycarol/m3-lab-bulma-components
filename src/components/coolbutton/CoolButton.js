import React, { Component } from "react";
import './CoolButton.css';

class CoolButton extends Component {
  render() {
    return (
      <div className="Button">
        <button className={`button is-${this.props.type} is-light`}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default CoolButton;
