import React from "react";
import "./coolButton.css";

class CoolButton extends React.Component {
    render () {
        return (
            <div>
                <button 
                    class="button is-rounded my-class is-danger is-small">
                    Login
                </button>
                <button 
                    class="button is-small is-success">
                    Sign up
                </button>
            </div>
        )
    }
}

export default CoolButton;