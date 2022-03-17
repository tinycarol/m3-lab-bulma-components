import React, { Component } from 'react';
import Coolbutton from '../coolButton/CoolButton';
import FormInput from './FormInput';
import "./formfield.css"

class Formfield extends Component {
    render() {
        return (
            <div className='formMain'>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                
                <FormInput type="text"  title="Name"  placeholder="e.g Alex Smith"/>
                <FormInput type="email" title="Email" placeholder="e.g. alexsmith@gmail.com"/>
                <FormInput type="password" title="Password" placeholder="*************"/>

                <Coolbutton type="is-primary is-light">Submit</Coolbutton>
            </div>
        );
    }
}

export default Formfield;
