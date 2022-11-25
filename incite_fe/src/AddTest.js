import React from 'react'
import {Link, Routes, ROute, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const AddTest = () => {
    const navigate = useNavigate("/")
    const [tname, tnameChange] = useState("")
    const [desc, descriptionChange] = useState("")
    
    const handle_tname_Change = (e) => {
        tnameChange(e.target.value)
      }
    const handle_description_Change = (e) => {
        descriptionChange(e.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/addTest`, {
            method: 'POST',
            body: JSON.stringify({
                tname: tname,
                desc : desc,
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
        .catch((err) => {console.log(err)});
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}  id="addTest">
                <label htmlFor="tname">Test Name</label><br/>
                <input type='text' id="tname" name="tname" onChange={handle_tname_Change} required/><br/><br/>
                <label htmlFor="desc">Description</label><br/>
                <textarea rows="4" cols="50" name="desc" form="addTest" onChange={handle_description_Change} required></textarea><br/><br/>
                <input type="Submit" value="Add a Test" readOnly />
            </form>
        </div>
    )
}

export default AddTest;