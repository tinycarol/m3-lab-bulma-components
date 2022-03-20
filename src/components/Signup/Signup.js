import React from 'react'
import Navbar from './../Navbar/Navbar'


// Create a Signup component that contains:

// A Navbar
// A form with
// A FormField for name
// An FormField for email
// A FormField for password
// A CoolButton for submitting the form

const Signup = () => {
    return (
        <>
            <Navbar/>
            <form>
                <input type="text" placeholder="name"></input>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Signup</button>
            </form>
        </>
    )   
}

export default Signup