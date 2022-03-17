import React, { Component } from 'react';

class Coolbutton extends Component {
    render() {
        return (
        <a className={`button ${this.props.type} ml-3`} href="/">                        
            <span>{this.props.children}</span>
        </a>
        )
    }
}

export default Coolbutton;
