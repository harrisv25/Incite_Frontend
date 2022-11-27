import React from 'react'
import { useParams} from 'react-router-dom'
import {Link, Routes, ROute, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const AddQuestion = () => {
    const navigate = useNavigate("/")
    const { user_id } = useParams()
    const [prompt, promptChange] = useState("")
    const [answerList, setAnswerList] = useState([
        { answer: ""},
        { answer: ""}
    ])

    const handle_prompt_Change = (e) => {
        promptChange(e.target.value)
      }
    
    const handleAnswerAdd = () => {
        setAnswerList([...answerList, { answer: ""}])
    }

    const handleAnswerChange = (e, index) => {
        const {name, value} = e.target
        const list = [...answerList];
        list[index][name] = value
        setAnswerList(list)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/addQuestion/${user_id}`, {
            method: 'POST',
            body: JSON.stringify({
                prompt: prompt,
                answers : Object.values(answerList),
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
        navigate('/Profile/'+user_id)
    }
    console.log(Object.values(answerList))
    return (
        <form onSubmit={(e) => { handleSubmit(e) }} className="question" autoComplete='off' id="addQuestion">
            <label htmlFor="prompt">Prompt</label><br/>
            <textarea rows="4" cols="50" name="prompt" form="addQuestion" onChange={handle_prompt_Change} placeholder='Enter Your Question Here' required></textarea><br/><br/>
            <div className='form-field'>
                <label htmlFor="answers">Answers</label>
                {answerList.map((singleAnswer, index) => (
                    <div key={index} className="answers">
                        <div className='first-division'>
                            {index} <input name="answer" type="text" id="answer" required 
                            value={singleAnswer.answer} onChange={(e) => handleAnswerChange(e, index)}/><br/>
                            {answerList.length - 1 === index && answerList.length < 10 &&
                            (
                                <button type="button" className='add-btn' onClick={handleAnswerAdd}>
                                    <span>Add an Answer Option</span>
                                </button>
                            )}
                        </div>
                        {/* can consider adding a remove answer feature here */}
                    </div>
                ))}
            </div>
            <input type="Submit" value="Add a Question" readOnly />
        </form>
    )
}

    // const [prompt, promptChange] = useState("")
    // const [answers, answersChange] = useState([])
    // const [option, optionChange] = useState("")


    
//     const handle_prompt_Change = (e) => {
//         promptChange(e.target.value)
//       }
//     const handle_option_Change = (e) => {
//         optionChange(e.target.value)
//       }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         fetch(`${process.env.REACT_APP_BACKEND_URL}/addQuestion`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 prompt: prompt,
//                 answers : answers,
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(res => {
//             if(res.ok) {
//                 return res.json()
//             }
//             throw new Error(res)
//         })
//         .catch((err) => {console.log(err)});
//         navigate('/')
//     }
//     return (
//         <div>
//             <form onSubmit={(e) => { handleSubmit(e) }}  id="addTest">
//                 <label htmlFor="prompt">Prompt</label><br/>
//                 <input type='text' id="prompt" name="prompt" onChange={handle_prompt_Change} required/><br/><br/>
//                 <label htmlFor="option">Option</label><br/>
//                 <input type='text' id="option" name="option" onChange={handle_option_Change} required/><br/><br/>
//                 <input type="Submit" value="Add a Test" readOnly />
//             </form>
//         </div>
//     )
// }

export default AddQuestion;