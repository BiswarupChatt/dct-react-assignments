import { useState } from "react"
import axios from 'axios'

export default function Assignment5() {
    const [userDetails, setUserDetails] = useState([])
    const [UserId, setUserId] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        axios.get(`https://jsonplaceholder.typicode.com/users/${UserId}`)
        .then((response)=>{
            setUserDetails(response.data)
            setErrorMessage(null)
        })
        .catch((err)=>{
            setErrorMessage('Record not found')
            setUserDetails(null)
        })
        setUserId("")
    }

    return (
        <div>
            <h1>
                Assignment 5
            </h1>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="userId">Enter Id</label>
                <input 
                type="text" id="userId" 
                value={UserId}
                onChange={(e)=>{
                    setUserId(e.target.value)
                }}
                />
                <input type="submit" />
            </form>

            {
                userDetails ? (
                    <p style={{color: 'green'}}>{userDetails.name} {userDetails.email} </p>
                ):(
                    errorMessage? <p style={{color: 'red'}}>{errorMessage}</p> :null
                )
            }
        </div>
    )
}