import { useState } from "react"
import axios from 'axios'
export default function Assignment15() {
    const [result, setResult] = useState({})

    const apiKey = 'pk.65f31aaffeba64de8c2d46b920e8a4d4'

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition((ele) => {
            const latitude = ele.coords.latitude
            const longitude = ele.coords.longitude


            axios.get(`https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`)
                .then((response) => {
                    // console.log(response.data)
                    setResult(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        })

    }
    return (
        <div>
            <h1>Assignment 15</h1>
            <button onClick={handleClick}>Get Location</button>
            {result && (
            <div>
                <h3>Latitude - {result.lat}</h3>
                <h3>Longitude - {result.lon}</h3>
                <h3>City - {result.display_name}</h3>
            </div>
        )}
        </div>
    )    
}