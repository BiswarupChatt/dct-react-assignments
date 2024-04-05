import { useState, useEffect } from "react"

export default function Assignment11() {
    const [title, setTitle] = useState(localStorage.getItem('title') || "")
    const [body, setBody] = useState(localStorage.getItem('body') || "")

    useEffect(()=>{
        localStorage.setItem('title', title)
        localStorage.setItem('body', body)
    }, [title, body])

    return (
        <div>
            <h1>Assignment 11</h1>
            <h4>Form Persist </h4>
            <form action="">
                <input type="text" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} placeholder="Enter Title" />
                <br />
                <textarea cols="21" rows="6" value={body} onChange={(e) => {
                    setBody(e.target.value)
                }} placeholder="Enter Body">
                </textarea>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}