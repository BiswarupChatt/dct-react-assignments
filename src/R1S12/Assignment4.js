import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Assignment4() {
    const [user, setUser]= useState('')
    const id = 3
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const result = response.data
                setUser(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>
                Assignment 4
            </h1>
            <h2>
                {user.name}, {user.email}, {user.address.city}
            </h2>
        </div>
    )
}