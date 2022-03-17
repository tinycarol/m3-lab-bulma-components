import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <button className={`button ${this.props.type}`}>
            {this.props.children}
          </button>
        </div>
      </div>
    )
  }
}

export default CoolButton;


