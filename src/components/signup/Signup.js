import "./Signup.css";
import "bulma/css/bulma.css";

import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";


const name = {
  title: "Name",
  example: "e.g Alex Smith"
}


const email = {
  title: "Email",
  example: "e.g. alexsmith@gmail.com"
}


const password = {
  title: "Password",
  example: "type between 6 and 8 characters"
}



export default class Signup extends React.Component {
  render() {
    return (
      <div className="Signup container">
        <Navbar />
        <FormField form={name} />
        <FormField from={email} />
        <FormField form={password} />

        <CoolButton className="CoolButton">Submit</CoolButton>
      </div>
    );
  }
}