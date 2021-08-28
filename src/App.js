import './App.css';
import React from "react";
import Navbar from './components/navbar/Navbar';
import FormField from './components/formfield/FormField';

const name = {
  label: "Name",
  placeholder: "e.g Alex Smith"
};

const email = {
  label: 'Email',
  placeholder: "e.g. alexsmith@gmail.com"
}

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <FormField field={name} />
        <FormField field={email} />
      </div>
    );
  }
}
