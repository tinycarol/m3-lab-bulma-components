import React from 'react';
import "./FormField.css";

export default class FormField extends React.Component {
  render() {
    const { field } = this.props;
    return(
        <div className="FormField">
          <label class="label">{field.label}</label>
          <div class="control">
            <input class="input" type="text" placeholder={field.placeholder} />
          </div>
        </div>
    )
  }
};

