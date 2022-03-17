import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from '../formfield/FormField';
import CoolButton from '../coolButton/CoolButton';
import Message from "../message/Message";
import "./SignUp.css";

class SignUp extends React.Component {
    render () {
        return (
            <div>
                <Navbar>
                    <CoolButton />
                </Navbar>
                <FormField 
                    label="Name" 
                    type="text" 
                    placeholder="e.g Alex Smith"
                />
                <FormField 
                    label="Email" 
                    type="email" 
                    placeholder="e.g alexsmith@gmail.com"
                />
                <FormField 
                    label="Password" 
                    type="password" 
                    placeholder="Password"
                />
                <Message />
            </div>
        )
    }
}

export default SignUp;