import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";


const Home = () => {
    const [apiData, setApiData] = useState({});
    const [loading, setLoading] = useState(true);
    const[comp, setComp] = useState(<Login/>)

    const handleLogin = () => {
        setComp(<Login/>)
    }

    const handleRegister = () => {
        setComp(<Register/>)
    }

    useEffect(() => {
        const getAPI = () => {
            const API = process.env.REACT_APP_BACKEND_URL+'/';
            fetch(API)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setLoading(false);
                    setApiData(data);
                });
        };
        getAPI();
    }, []);
    return (
        <section id="home-page">
            <div id="userlogin">
                <div id="nav-items">
                    {comp}
                    <br/>
                    <button onClick={(handleLogin)} id="tempnav">Login</button>
                    <button onClick={(handleRegister)}id="tempnav">Register</button>
                </div>
            </div>
            <div id="Welcome-Greeting">
                <p>
                    Welcome to Incite, a place of community engagemnt and self-learning.<br/>
                    Here we seek to understand ourselves as an individual in society. <br/>
                    Ask questions to the community and answer some in return, compare <br/>
                    you're results and see how your perspective stacks up against the <br/>
                    rest of the community. 
                </p>
            </div>

        </section>
    )
}
export default Home;
