import * as React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Profile = () => {
    const [user, setUser] = useState({});
    const { user_id } = useParams()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Profile/${user_id}`, {
            method: 'GET',
            // body: JSON.stringify({
            //     user_id: user_id,
            // }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            setUser(data);
        })
        }, [user_id])
    return (
      <div>
        <h1>{user['username']}</h1>
        <div id="user_nav">
            <Link to={`/AddQuestion/${user_id}`}>
                <h4>Ask a Question</h4>
            </Link>
            <Link to={`/ViewQuestion/${user_id}`}>
                <h4>Answer Questions</h4>
            </Link>
        </div>
    </div>
    )
  }

  export default Profile;

