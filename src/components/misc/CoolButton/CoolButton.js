import React, { Component } from 'react'

class CoolButton extends Component {
    render() {
        console.log(this.props)
      return (
          <button className={`button ${this.props.colorButton} ${this.props.className} is-small `}>
            {this.props.children}
          </button>
      )
    }
  }

export default CoolButton;