import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Assignment7() {
    const [user, setUser] = useState([])
    const [todoUser, setTodoUser] = useState([])

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


    const handleSubmit = (e) => {
        const id = e.target.value
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then((response) => {
                const result = response.data
                setTodoUser(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Assignments 7</h1>

            <label htmlFor="user">
                User
            </label>
            <select name="" id="user" onChange={handleSubmit}>
                <option value="">Select User</option>
                {user.map((ele) => {
                    return (
                        <option key={ele.id} value={ele.id}>{ele.name}</option>
                    )
                })}
            </select>
            {todoUser.length > 0 &&
                (<div>
                    <h3>Listing Task</h3>
                    <ul>
                        {todoUser.map((ele) => {
                            return (
                                <li key={ele.id} style={{ textDecoration: ele.completed ? "line-through" : "none", color: ele.completed ? 'green' : 'red' }}>{ele.title}</li>
                            );
                        })}
                    </ul>
                </div>)
            }
        </div>


    )
}