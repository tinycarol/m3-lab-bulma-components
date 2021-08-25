import './App.css';
import Navbar from "./components/navbar/Navbar";
import React from "react";

export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Navbar />
      </div>
    )
  }
}