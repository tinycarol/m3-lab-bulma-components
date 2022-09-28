import CoolButton from "../CoolButton/CoolButton";
import FormField from "../FormField/FormField";
import Navbar from "../Navbar/Navbar";

function Signup () {
    return (
      <>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Choose your password"
        />
        <CoolButton classProps="button is-small is-success is-rounded my-class">Submit</CoolButton>
      </>
    );
}

export default Signup;