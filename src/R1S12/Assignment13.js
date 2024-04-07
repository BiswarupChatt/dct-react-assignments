import { useState,  } from "react"


export default function Assignment13() {

    const [ random, setRandom ] = useState(0)
    const [catchEven, setCatchEven] = useState([])


    const createRandomNumber = () => {
        const result = Math.floor(Math.random() * 100)
        setRandom(result)
        if(result %2 === 0){
            setCatchEven(arr => [...arr, result])
        }
    }

    return (
        <div>
            <h1>Assignment 13</h1>
            {random}
            <br />
            <button onClick={createRandomNumber}>Generate Random Number</button>
            <ul>
                {catchEven.map((ele, i)=>{
                   return( <li key={i}>{ele}</li>)
                })}
                
            </ul>
        </div>

    )
}