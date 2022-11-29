import * as React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import NavBar from './NavBar';




const Profile = () => {
    const [user, setUser] = useState({});
    const { user_id } = useParams()
    const [ user_questions, setQuestions ] = useState([]) 
    const [ user_answers, setAnswers ] = useState([]) 
    const [ user_percent, setpercent ] = useState([]) 

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Profile/${user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            setUser(data);
        })
        }, [user_id])
    useEffect(() => {
        const getQuestions = () => {
            const API = `${process.env.REACT_APP_BACKEND_URL}/LoadQuestion/${user_id}`;
            fetch(API, {
                method: 'POST',
                body: JSON.stringify({
                    answers : user.answers,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setQuestions(data[0]);
                    setAnswers(data[1]);
                    setpercent(data[2]);
                });
        };
        getQuestions();
    }, [user.answers]);
    return (
      <div>
        <NavBar />
        <div id="Dashboard-page">
        <table id='user_results'>
            <tr>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Percent of People With Same Answer</th>
            </tr>
            {user_questions.map((question, index) => (
                <tr>
                  <td>{question}</td>
                  <td>{user_answers[index][Object.values(user.answers)[index]]}</td>
                  <td>{user_percent[index]}</td>
                </tr>
            ))}
        </table>
        </div>
    </div>
    )
  }

  export default Profile;
