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
    // console.log(apiData[0])
    return (
        <section>
            {Object.keys(apiData).map((test) => {
                const testID = apiData[test].id;
                const tname = apiData[test].tname;
                const desc = apiData[test].desc;
                return (
                    <div className="test-container" key={String(testID)}>
                        <h1>{tname}</h1>
                        <p>{desc}</p>
                    </div>
                )
            })}
        </section>
    )
}
export default Home;
