import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import FormField from "./components/formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

class Signup extends Component {
  render() {
    return (
      <>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Type in your password"
        />
        <CoolButton type="is-primary">Submit</CoolButton>
      </>
    );
  }
}

export default Signup;
