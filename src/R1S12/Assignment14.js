import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Assignment14(){
    
    const [user, setUser] = useState([])
    const [posts, setPosts] = useState([])
    const [todo, setTodo] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            setPosts(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((response)=>{
            setTodo(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>
                Assignment 14
            </h1>
            <h3>Dashboard</h3>
            <h3> Users - {user.length}</h3>
            <h3> Posts - {posts.length}</h3>
            <h3> Todos - {todo.length}</h3>
        </div>
    )
}