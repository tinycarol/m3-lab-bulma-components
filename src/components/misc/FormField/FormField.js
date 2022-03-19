import React from 'react';

const FormField = ({label,type,placeholder}) => {
    return (
        <div>
            <form>
                <label>{label}</label> 
                <input type={type} placeholder={placeholder}></input>
            </form>
        </div>
    );
};

export default FormField;