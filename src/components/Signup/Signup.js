import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";

function Signup() {

    return (
        <div className="Signup">
            <Navbar />
            <div className='container'>
                <div>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
                <hr/>
                <div>
                <CoolButton size='is-medium' color='is-success' className='is-rounded'>Summit</CoolButton>
                </div>
            </div>

        </div>

    )
}

export default Signup