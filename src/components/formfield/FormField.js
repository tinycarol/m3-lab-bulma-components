import React from 'react';

class FormField extends React.Component {
    render() {
return (
    <form>
        <label>Name
        <input type="text" placeholder="e.g. Peppa Pig"/>
        </label>
        <label>Email
            <input type="email" placeholder="e.g. peppa@pig.com"/>
        </label>
    </form>
)
    }
};

export default FormField;

