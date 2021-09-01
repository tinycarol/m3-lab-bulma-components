import React from "react";
import "./FormField.css";


export default class FormField extends React.Component {
  render() {
    return(
        <div className="FormField">
          <label class="label">{this.props.label}</label>
          <div class="control">
            <input class="input" type="text" placeholder={this.props.placeholder} />
          </div>
        </div>
    )
  }
};
