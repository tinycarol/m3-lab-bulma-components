import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return (
      <button className={`button ${this.props.type}`}>
        {this.props.children}
      </button>
    );
  }
}

export default CoolButton;