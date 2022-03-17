import React from "react";
import "./FormField.css";

/*CON EL SIGUIENTE MÉTODO NO ME CARGA LA PÁGINA
class FormField extends React.Component {
    render() {
        return (
            <div>
                <FormField 
                    label="Name" 
                    type="text" 
                    placeholder="e.g Alex Smith"
                />
                <FormField 
                    label="Email" 
                    type="email" 
                    placeholder="e.g. alexsmith@gmail.com"
                /> 
            </div>
        )
    }
}*/

//Esta clase funciona como una función genérica para sustituir los "this.props" por 
class FormField extends React.Component {
  render() {
    return (
      <div>
        <div className="Formfield">
          <label className="label">
            {this.props.label}
          </label>
          <div className="control">
            <input 
              className="input" 
              type="text"
              placeholder={this.props.label} 
            />
          </div>
        </div>
      </div>
    );
  }
}
export default FormField;
