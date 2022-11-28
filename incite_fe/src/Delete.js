import React from 'react'
import { useParams} from 'react-router-dom'
import {Link, Routes, ROute, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Delete = () => {
    const navigate = useNavigate()
    const { user_id } = useParams()
    const handleClick = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/delete/${user_id}`, {
            method: 'POST',
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
        .catch((err) => {console.log(err)});
        navigate('/')
    }
    return (
        <div>
            <h2>
                Are you sure you want to delete your account?
            </h2>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Delete;