import axios from "axios"
import { useEffect, useState } from "react"


export default function Assignment8() {

    const [user, setUser] = useState([])
    const [todo, setTodo] = useState([])
    const [completed, setCompleted] = useState(null)

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

    const handleChange = (e) => {
        const id = e.target.value
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then((response) => {
                const result = response.data
                setTodo(result)
                console.log(todo)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>Assignment 8 </h1>
            <label> User
                <select name="" onChange={handleChange}>
                    <option value="" >Select User</option>
                    {user.map((ele) => {
                        return (
                            <option key={ele.id} value={ele.id}>{ele.name}</option>
                        )
                    })}
                </select>
            </label>

            {todo.length > 0 && (
                <div>
                    <h3>
                        Listing Task
                    </h3>
                    <label>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={(e)=>{
                                setCompleted(e.target.checked)
                            }}
                        />
                        Completed?
                    </label>
                    <ul>
                        {todo.filter((ele) => !completed || ele.completed).map((ele) => {
                            return (
                                <li key={ele.id} style={{ textDecoration: ele.completed ? "line-through" : "none", color: ele.completed ? 'green' : 'red' }}>{ele.title}</li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}