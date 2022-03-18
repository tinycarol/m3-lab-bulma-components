import React from "react";
import CoolButton from "../coolbutton/CoolButton";
import FormField from "../formfield/FormField";
import Navbar from "../navbar/Navbar";

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
        </div>
      </>
    );
  }
}

export default Signup;
