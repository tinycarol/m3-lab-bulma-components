import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className={`button ${this.props.type} large`}>
          {this.props.children}
        </button>
      </div>
    )
  }
}

export default CoolButton;


