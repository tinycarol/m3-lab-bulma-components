import "./Signup.css";
import "bulma/css/bulma.css";

import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";





export default class Signup extends React.Component {
  render() {
    return (
      <div className="Signup container">
        <Navbar />
        <FormField label="Name" />
        <FormField label="Email" />
        <FormField label="Password" />

        <CoolButton className="CoolButton">Submit</CoolButton>
      </div>
    );
  }
}