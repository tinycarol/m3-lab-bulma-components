import 'bulma/css/bulma.css';
import "./Navbar.css"

function Navbar () {
  return (
      <nav className="navbar is-light">
<div className="navbar-brand">
  <a className="navbar-item" href="#">
    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
  </a>
  <div className="navbar-burger" data-target="navbarExampleTransparentExample">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<div id="navbarExampleTransparentExample" className="navbar-menu">
  <div className="navbar-start">
    <a className="navbar-item" href="#">
      Home
    </a>
    <div className="navbar-item has-dropdown is-hoverable">
      <div className="navbar-dropdown is-boxed">
        <a className="navbar-item" href="#">
          Overview
        </a>
        <a className="navbar-item" href="#">
          Modifiers
        </a>
        <a className="navbar-item" href="#">
          Columns
        </a>
        <a className="navbar-item" href="#">
          Layout
        </a>
        <a className="navbar-item" href="#">
          Form
        </a>
        <hr className="navbar-divider"/>
        <a className="navbar-item" href="#">
          Elements
        </a>
        <a className="navbar-item is-active" href="#">
          Components
        </a>
      </div>
    </div>
  </div>

  <div className="navbar-end">
    <div className="navbar-item">
      <div className="field is-grouped">
        <p className="control">
          <a className="bd-tw-button button is-info directionColumn" data-social-network="Twitter" data-social-action="tweet" data-social-target="#"  href="#">
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              Login
            </span>
          </a>
        </p>
        <p className="control">
          <a className="button is-primary directionColumn" href="#">
            <span className="icon">
              <i className="fas fa-download"></i>
            </span>
            <span>Signup</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
</nav>
  )
}

export default Navbar