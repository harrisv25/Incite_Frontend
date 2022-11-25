import React from 'react'
import {Link, Routes, ROute, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate("/")
    const [username, usernameChange] = useState("")
    const [password, passwordChange] = useState("")
    
    const handle_username_Change = (e) => {
        usernameChange(e.target.value)
      }
    const handle_password_Change = (e) => {
        passwordChange(e.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Login`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password : password,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })
        .then((data) => {
            // console.log(data)
            if(data === -99999){
                navigate('/Login')
            }
            else {
                navigate('/Profile/'+data)
            }
            // setLoading(false);
            // setApiData(data);
        })
        .catch((err) => {console.log(err)});
        // navigate('/')
    }
    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}  id="Login">
                <input type='text' id="username" name="username" placeholder="Username" onChange={handle_username_Change} required/><br/><br/>
                <input type='text' id="password" name="password" placeholder="Password" onChange={handle_password_Change} required/><br/><br/>
                <input type="Submit" value="Login" readOnly />
            </form>
        </div>
    )
}

export default Login;