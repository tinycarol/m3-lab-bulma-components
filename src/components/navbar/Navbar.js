import CoolButton from '../coolButton/CoolButton';

function Nav() {
    return (
        <div>
        <nav className="navbar is-transparent container">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"  alt=''/>
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample"></div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                    Home
                </a>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p >
                        <CoolButton type="is-primary" >Login</CoolButton>
                        </p>
                        <p>
                        <CoolButton type="is-info"   >Signup</CoolButton>
                        </p>
                     
                    </div>
                </div>
                </div>
            </div>
        </nav>
        </div>
    );
}
  
export default Nav;