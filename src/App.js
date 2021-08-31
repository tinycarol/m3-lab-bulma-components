import './App.css';
import Navbar from "./components/navbar/Navbar";
import React from "react";
import CoolButton from './components/coolbutton/CoolButton';
import FormField from './components/formfield/FormField';

// el contenido de los componentes se ponen antes de la clase

const name = {
  title: "Name",
  example: "e.g Alex Smith"
}


const email = {
  title: "Email",
  example: "e.g. alexsmith@gmail.com"
}


export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Navbar>
          <CoolButton/>
        </Navbar>
          <FormField form={name}/>
          <FormField form={email}/>
      </div>
    )
  }
}