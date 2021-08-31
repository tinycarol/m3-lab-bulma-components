import "./FormField.css";
import React from "react";



export default class FormField extends React.Component {
    render() {

        const { form } = this.props;

        return(

        // !!! Vale un mismo FIELD para las dos cosas

        <div className="FormField">
            <div class="field">
                <label class="label">{form.title}</label>

                <div class="control">
                    <input class="input" type="text" placeholder={form.example}/>
                </div>
            </div>
        </div>
        )
    }
    
}
