import React from "react"

import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>


        </div>
    )
}

export {Navbar}