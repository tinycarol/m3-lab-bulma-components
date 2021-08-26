import "./CoolButton.css";
import React from 'react';

export default function CoolButton() {
    return(
        <div className="CoolButton">
            <button className="button is-primary">Log In</button>
            <button className="button is-danger">Sign Up</button>
        </div>
    )
}
