import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [apiData, setApiData] = useState({});
    const [loading, setLoading] = useState(true);
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
            {Object.keys(apiData).map((question) => {
                const questionID = apiData[question].id;
                const prompt = apiData[question].prompt;
                return (
                    <li key={String(questionID)}>
                    <Link to={`/AnswerQuestion/${String(questionID)}`} state={{ question }}>
                        <h4>{prompt}</h4>
                    </Link>
                  </li>
                )
            })}
        </section>
    )
}
export default Home;
