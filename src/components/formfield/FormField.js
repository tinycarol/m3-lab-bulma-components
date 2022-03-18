import React from 'react';
import './FormField.css'

class FormField extends React.Component {
    render() {
return (
<div className="Block">

    <><div className="Field">
        <label className="Label">Name</label>
        <div className="Control">
            <input className="Input" type="text" placeholder="e.g. Peppa Pig" />
        </div>
    </div><div className="Field">
            <label className="Label">Email</label>
            <div className="Control">
                <input className="Input" type="text" placeholder="e.g. peppa@pig.uk" />
            </div>
        </div><div className="Field">
            <label className="Label">Password</label>
            <div className="Control">
                <input className="Input" type="text" placeholder="********" />
            </div>
        </div></>
</div>

)
}
}


export default FormField;

