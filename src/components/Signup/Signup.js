import Navbar from '../Navbar/Navbar';
import FormField from '../Formfield/Formfield';
import Button from '../Button/Button';
import './Signup.css';
import Message from '../Message/Message';

function Signup() {
    return (
        <>
            <Navbar />
            <div className='body-container'>
                <div className='formfield-container'>
                    <form>
                        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                        <FormField label="Password" type="password" placeholder="Choose a password" />
                        <Button classy="is-success">Sign In</Button>
                    </form>
                </div>
                <Message classy="is-info" title="Oi meu amor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            </div>
        </>
    )
};

export default Signup;