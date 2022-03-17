import React, { Component } from 'react';

class CoolButton extends Component {
    render() {
        return (
<button className={`button is-${this.props.type}`}>
{this.props.children}
</button>
        )
    }
}

export default CoolButton