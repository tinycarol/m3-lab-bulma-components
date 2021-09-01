import "./Signup.css"
import Navbar from "../navbar/Navbar"
import FormField from "../formfield/FormField"
import CoolButton from "../coolbutton/CoolButton"

let Signup = (props) => {
    return (
        <div>
            <Navbar />
            <div id="form">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
            <CoolButton isSuccess>
                Submit
            </CoolButton>
        </div>
    )
}

export default Signup