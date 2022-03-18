import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import FormField from '../FormField/FormField.js';
import CoolButton from '../CoolButton/CoolButton.js';
import './Signup.css';

class Signup extends React.Component {
    render() {
        return <>
            <Navbar/>
            <form className="mt-6 container is-fluid">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="**********" />
                <CoolButton className="mt-3" isPrimary>Submit</CoolButton>
            </form>
        </>
    }
}

export default Signup;