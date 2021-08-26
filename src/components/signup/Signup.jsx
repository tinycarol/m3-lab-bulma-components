import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import Message from "../message/Message";
import "bulma/css/bulma.css";

export default class Signup extends React.Component {
  render() {
    return (
      <div className="Signup container">
        <Navbar />
        <Message title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
        <FormField label="Name" />
        <FormField label="Email" />
        <FormField label="Password" />
        <CoolButton className="is-info is-rounded CoolButton">
          Submit!
        </CoolButton>
      </div>
    );
  }
}
