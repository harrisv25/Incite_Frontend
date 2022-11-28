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
        <section>
            <div id="userlogin">
                {comp}
                <button onClick={(handleLogin)}>Login</button>
                <button onClick={(handleRegister)}>Register</button>
                {/* <div>
                    <Link to={`/Login`}>
                        <h4>Login</h4>
                    </Link>
                    <Link to={`/Register`}>
                        <h4>Register</h4>
                    </Link>
                </div> */}
            </div>
        </section>
    )
}
export default Home;
