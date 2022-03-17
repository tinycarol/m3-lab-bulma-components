import React, { Component } from "react";
import FormField from "../formfield/FormField";
import Navbar from "../navbar/Navbar";
import CoolButton from "../button/CoolButton";


class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className='form'>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="Your password" />
          <CoolButton type="is-success large">Submit</CoolButton>
        </div>  
      </div>
    )
  }
}

export default Signup;