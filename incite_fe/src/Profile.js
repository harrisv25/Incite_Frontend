import * as React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Profile = () => {
    const [user, setUser] = useState({});
    const { user_id } = useParams()
    const [ user_questions, setQuestions ] = useState([]) 
    const [ user_answers, setAnswers ] = useState([]) 
    const [ user_percent, setpercent ] = useState([]) 

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Profile/${user_id}`, {
            method: 'GET',
            // body: JSON.stringify({
            //     user_id: user_id,
            // }),
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
                    // console.log(response);
                    return response.json();
                })
                .then((data) => {
                    // console.log(data)
                    setQuestions(data[0]);
                    setAnswers(data[1]);
                    setpercent(data[2]);
                });
        };
        getQuestions();
    }, [user.answers]);
    // console.log(user_questions)
    return (
      <div>
        <h1>{user['username']}</h1>
        <div id="user_nav">
            <Link to={`/AddQuestion/${user_id}`}>
                <h4>Ask a Question</h4>
            </Link>
            <Link to={`/ViewQuestion/${user_id}`}>
                <h4>Answer Questions</h4>
            </Link>
            <Link to={`/Delete/${user_id}`}>
                <h4>Delete User Account</h4>
            </Link>
        </div>
        <table>
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
    )
  }

  export default Profile;
