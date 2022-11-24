import React from 'react'
import {Link, Routes, ROute, useNavigate } from 'react-router-dom'

class AddTest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tname:'',
            desc:''
        }
    }

    navigate = () => {
        useNavigate('/');
    }

    tnameChange = (event) => {
        this.setState({
            tname: event.target.value,
        })
    }

    descriptionChange = (event) => {
        this.setState({
            desc: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/addTest`, {
            method: 'POST',
            body: JSON.stringify({
                tname: this.state.tname,
                desc : this.state.desc,
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
        .catch((err) => {console.log(err)})
        // navigate('/')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit & this.navigate} action='/' id="addTest">
                    <label htmlFor="tname">Test Name</label><br/>
                    <input type='text' id="tname" name="tname" onChange={this.tnameChange} required/><br/><br/>
                    <label htmlFor="desc">Description</label><br/>
                    <textarea rows="4" cols="50" name="desc" form="addTest" onChange={this.descriptionChange} required></textarea><br/><br/>
                    <input type="Submit" value="Add a Test" readOnly />
                </form>
            </div>
        )
    }
}

export default AddTest;