import axios from "axios"
import { useState } from "react"


export default function Assignment6() {

    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [user, setUser] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
            .then((response) => {
                const result = response.data
                if (result.length > 0) {
                    setUser(result[0])
                    setError(null)
                } else {
                    setError("Record not found")
                    setUser(null)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <h1>
                Assignment 6
            </h1>
            <h3>Search Email</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <input type="submit" />
            </form>
            {user && <h2 style={{color: "green"}}>{user.name} {user.email} {user.address.city}</h2>}
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
        </div>
    )
}