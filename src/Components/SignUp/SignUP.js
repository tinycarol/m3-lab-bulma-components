import React from 'react';
import FormField from '../Formfield/FormField';
import CoolButton from '../Misc/CoolButton/CoolButton';

const SignUP = () => {
    return (
        <div className='container'>
            <div className='signUp'>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField
                    label="Password"
                    type="password"
                    placeholder="Type in your password" />
                <CoolButton className="is-rounded my-class btn-primary is-primary">Submit</CoolButton>
                {/* <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
            </div>
        </div>
    );
};

export default SignUP;