import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return ( 
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Login'>Login</Link></li>
            <li><Link to='/Register'>Register</Link></li>

        </ul>
    )
}

export default NavBar;