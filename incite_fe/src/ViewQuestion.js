import * as React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';


const ViewQuestion = () => {
    const navigate = useNavigate("/")
    const [question, getQuestion] = useState({});
    // const { question_id } = useParams()
    const [userAnswer, setAnswer] = useState('')
    const { user_id } = useParams()


    const onValueChange = (event, index) => {
        // console.log(index)
        setAnswer({
            index
        });
      }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/ViewQuestion/${user_id}`, {
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
            getQuestion(data);
        })
        }, [user_id])
    // console.log(question.id)

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/AnswerQuestion`, {
            method: 'POST',
            body: JSON.stringify({
                user_id: user_id,
                question_id: question.id,
                answer : userAnswer,
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
        navigate(`/ViewQuestion/${user_id}`)
    }

    return (
      <div>
        <h2>{question['prompt']}</h2>
        <form onSubmit={handleSubmit} className="question" autoComplete='off' id="answerQuestion">
            <div className='form-field'>
                {question && question.answers && 
                question['answers'].map((option, index) => (
                    <div key={index} className="option">
                        <input name="answer" 
                        type="radio" 
                        id="answer" 
                        required 
                        value={option}
                        onChange={(e) => onValueChange(e, index)}/>
                        <label htmlFor="answer">{option}</label><br></br>
                    </div>
                ))}
            </div>
            <input type="Submit" value="Submit Answer" readOnly />
        </form>
      </div>
    )
  }

  export default ViewQuestion;

