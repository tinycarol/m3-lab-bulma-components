import React from "react";
import "./Signup.css";
import Navbar from "../navbar/Navbar"
import FormField from '../formfield/FormField';
import CoolButton from '../coolButton/CoolButton';
import "bulma/css/bulma.css";

export default class Signup extends React.Component {
    render () {     
    return(
        <div className="Signup">
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />            
            <FormField label="Password" type="password"/>   
            <CoolButton isSmall isSuccess>Submit!</CoolButton>
        </div>
    )
  }
};