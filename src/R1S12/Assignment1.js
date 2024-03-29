
import { useState, useEffect } from "react"
import axios from 'axios'

export default function Assignment1() {

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
            <h1>Assignments 1</h1>
            <h2>Listing Users</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Position</th>
                    </tr>
                </thead>

                <tbody>
                    {user.map((ele, i) => {
                        return (
                            <tr key={i}>
                                <th>{ele.id}</th>
                                <th>{ele.name}</th>
                                <th>{ele.email}</th>
                                <th>{ele.address.city}</th>
                                <th>{ele.address.geo.lat}, {ele.address.geo.lng}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}