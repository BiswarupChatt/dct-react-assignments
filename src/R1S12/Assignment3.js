import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Assignment3() {
    const [id, setId] = useState('')
    const [user, setUser] = useState([])
    const [userDetails, setUserDetails] = useState(null)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                const result = response.data
                setUser(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => {
                    const result = response.data
                    setUserDetails(result)
                    console.log(userDetails)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            setUserDetails(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleChange = (e) => {
        setId(e.target.value)
    }

    return (
        <div>
            <h1>
                Assignment3
            </h1>
            <label htmlFor="user"></label>
            <select name="" id="user" onChange={handleChange}>
                <option value="">Select User</option>
                {user.map((ele) => {
                    return (
                        <option value={ele.id} key={ele.id}>{ele.name}</option>
                    )
                })}
            </select>
            {userDetails ? (
                <div>
                    <h2>User Name: {userDetails.name}</h2>
                    <h2>User Email: {userDetails.email}</h2>
                    <h2>User City: {userDetails.address.city}</h2>
                </div>
            ) : (
                <p>Select a User</p>
            )}
        </div>
    )
}