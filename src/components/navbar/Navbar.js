import CoolButton from "../button/CoolButton"

function Navbar() {
  return(
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">Home</a>
          <a className="navbar-item" href="/">
            <CoolButton type="is-rounded is-danger large">Login</CoolButton>
          </a>
          <a className="navbar-item" href="/">
            <CoolButton type="is-success large">Signup</CoolButton>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar