import React, { Component } from 'react'
import "./formfield.css"

class FormInput extends Component {
  render() {
    return (
        <div className="field">
            <label className="label">{this.props.title}</label>
            <div className="control ">
                <input 
                className="input  is-rounded is-medium is-black " 
                type={this.props.type} 
                placeholder={this.props.placeholder}/>
            </div>
        </div>
    )
  }
}

export default FormInput;
