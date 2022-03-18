import React from "react";
import CoolButton from "../coolbutton/CoolButton";
import FormField from "../formfield/FormField";
import Navbar from "../navbar/Navbar";
import Message from "../message/Message"

class Signup extends React.Component {
  render() {
    return (
      <>
        <>
          <div>
            <Navbar />
          </div>
          <div>
            <FormField />
          </div>
        </>
        <div className="field is-grouped">
          <CoolButton isSmall isSuccess type="success">
            Submit
          </CoolButton>
          <Message />
        </div>
      </>
    );
  }
}

export default Signup;
