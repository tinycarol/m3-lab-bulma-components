import './Signup.css'
import FormField from '../formfield/FormField'
import Button from '../button/Button';

function Signup() {
    return(
        <div className='signup'>
            <h2>Sign up</h2>
            <div className='form'>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*****************" />
            </div>
            
            <div className='buttons'>
            <Button className="is-rounded is-danger">Cancel</Button>
            <Button className="is-success">Submit</Button>
            </div>
        </div>
    )
}

export default Signup