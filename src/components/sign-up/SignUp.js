import CoolButton from '../cool-button/CoolButton.js';
import FormField from '../formfield/FormField';
import Message from '../message/Message.js';
import Navbar from "../navbar/Navbar.js"

const SignUp = () => {
    return (
        <>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger className="is-rounded my-class" content={"Login"} />
            <CoolButton isSmall isDanger className="is-rounded my-class" content={"Sign Up"} />
            <Message />
        </>
    )
}

export default SignUp;