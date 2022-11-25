import * as React from 'react'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';


const Profile = () => {
    const [user, setUser] = useState({});
    const { user_id } = useParams()

    // console.log(user_id)
  
    useEffect(() => {
        // fetch request
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
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data)
            // setLoading(false);
            setUser(data);
        })
        }, [user_id])

    // console.log(user)
  
    return (
      <div>
        <h1>{user['username']}</h1>
      </div>
    )
  }

  export default Profile;

