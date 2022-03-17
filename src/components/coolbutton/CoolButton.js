import React, { Component } from 'react';

class CoolButton extends Component {
    render() {
        return (
<CoolButton className={`button is-${this.props.type}`}>
{/* {this.props.children} */}
</CoolButton>
        )
    }
}

export default CoolButton