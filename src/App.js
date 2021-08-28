import './App.css';
import React from "react";
import 'bulma/css/bulma.css';
import Navbar from './components/navbar/Navbar';
import FormField from './components/formfield/FormField';
import CoolButton from './components/coolbutton/CoolButton';
import Signup from './components/signup/Signup';

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

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <FormField field={name} />
        <FormField field={email} />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton> 
        <CoolButton isSmall isSuccess classname='my-class'>
          Button 2
        </CoolButton>
        <Signup />
      </div>
    );
  }
}
