import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return ( 
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Login'>Login</Link></li>
            <li><Link to='/Register'>Register</Link></li>
            {/* <li><Link to='/AddQuestion/:user_id'>Add a Question</Link></li> */}
            {/* <li><Link to='/Profile/:User_id'>Profile Page</Link></li> */}
        </ul>
    )
}

export default NavBar;