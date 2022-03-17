import React from "react";
import "./Navbar.css"
import CoolButton from "../coolButton/CoolButton";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          ></div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">

            <CoolButton />
            
              {/* <p className="control">
                <a className="bd-tw-button button" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                  <span className="icon">
                    <i className="fas fa-download"></i>
                  </span>
                  <span>Login</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                  <span className="icon">
                    <i className="fas fa-download"></i>
                  </span>
                  <span>Signup</span>
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
