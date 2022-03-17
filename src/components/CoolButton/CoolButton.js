import React from 'react';

const CoolButton = ({ props, children }) => {

    return (
      <div>
        <button className="button is-rounded my-class is-danger is-small">Login</button>
        <button className="button is-small is-success">Sing up</button>
      </div>
    )
  }

export default CoolButton;
