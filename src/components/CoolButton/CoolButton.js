import React from 'react'
import 'bulma/css/bulma.css'


const CoolButton = ({ className, isSmall, isDanger, isSuccess, children }) => {
    return (
        <button className={`button ${className ? className : ''} ${isSmall ? 'is-small' : ''} ${isDanger ? 'is-danger' : ''} ${isSuccess ? 'is-success' : ''}`}>{children}</button>
    )
}

export default CoolButton
