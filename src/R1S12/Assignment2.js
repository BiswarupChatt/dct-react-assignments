import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Assignment2(){
    const [user, setUser] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const result = response.data
            setUser(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    
    return(
        <div>
            <h1>
                Assignment 2
            </h1>
            <label htmlFor="user">User</label>
            <select name="" id="user">
                <option value="">Select User</option>
                {user.map((ele)=>{
                    return(
                        <option key={ele.id}>{ele.name}</option>
                    )
                })}
            </select>
        </div>
    )
}