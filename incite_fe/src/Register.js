import React from 'react'
import {Link, Routes, ROute, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Register = () => {
    const navigate = useNavigate("/")
    const [username, usernameChange] = useState("")
    const [email, emailChange] = useState("")
    const [password, passwordChange] = useState("")
    const [message, messageChange] = useState("Please enter your account information")
    const [messageID, messageIDChange] = useState("register_intro")


    
    const handle_username_Change = (e) => {
        usernameChange(e.target.value)
      }
    const handle_email_Change = (e) => {
        emailChange(e.target.value)
      }
    const handle_password_Change = (e) => {
        passwordChange(e.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Register`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                email: email,
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
            if(data === 1){
                navigate('/Login')
            }
            else if (data === 0) {
                messageIDChange('register_error')
                messageChange('Username not available. Please select a new one.')
                navigate('/Register')
            }
            else {
                messageIDChange('register_error')
                messageChange('Email already in use. Please select a new one.')
                navigate('/Register')
            }
        })
        .catch((err) => {console.log(err)});
        // navigate('/')
    }
    return (
        <div>
            <h3 id={messageID}>{message}</h3><br/>
            <form onSubmit={(e) => { handleSubmit(e) }}  id="Login">
                <input type='text' id="username" name="username" placeholder="Username" onChange={handle_username_Change} required/><br/><br/>
                <input type='text' id="email" name="email" placeholder="Email" onChange={handle_email_Change} required/><br/><br/>
                <input type='text' id="password" name="password" placeholder="Password" onChange={handle_password_Change} required/><br/><br/>
                <input type="Submit" value="Register Account" readOnly />
            </form>
        </div>
    )
}

export default Register;