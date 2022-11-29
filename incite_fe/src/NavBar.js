import React from "react";
import { Link } from "react-router-dom";
import { useParams} from 'react-router-dom'



function NavBar() {

    const { user_id } = useParams()

    return ( 
        <ul>
            <li><Link to={`/Profile/${user_id}`}>Dashboard</Link></li>
            <li><Link to={`/AddQuestion/${user_id}`}>Ask a Question</Link></li>
            <li><Link to={`/ViewQuestion/${user_id}`}>Answer Questions</Link></li>
            <li><Link to={`/Delete/${user_id}`}>Delete User Account</Link></li>
            <li><Link to={`/`}>Logout</Link></li>

        </ul>
    )
}

export default NavBar;