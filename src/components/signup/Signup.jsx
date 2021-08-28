import React from 'react';
import FormField from '../formfield/FormField';
import Navbar from '../navbar/Navbar';
import CoolButton from '../coolbutton/CoolButton';

const name = {
  label: "Name",
  type: "text",
  placeholder: "e.g Alex Smith"
};

const email = {
  label: 'Email',
  type: "email",
  placeholder: "e.g. alexsmith@gmail.com"
};

const password = {
  label: 'Password',
  type: 'password',
  placeholder: 'Password'
}

export default class Signup extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <FormField field= {name} />
        <FormField field = {email} />
        <FormField field = {password} />
        <CoolButton isSmall className='is-primary'>
          Submit
        </CoolButton>
      </div>
       
    )
  }
}