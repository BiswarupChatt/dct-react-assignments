import { useEffect, useState } from "react"
import axios from "axios"


export default function Assignment9() {
    const [value, setValue] = useState(1)
    const [rate, setRate] = useState({})

    useEffect(() => {
        const apiKey = '37d293731e6ec9ede5465338'
        axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/INR`)
            .then((response) => {
                const result = response.data
                setRate(result)
                console.log(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [value])

    return (
        <div>
            <h1>
                Currency Converter
            </h1>
            <h3>{rate.base_code} - {value}</h3>
            <h3>{rate.target_code} - {value * rate.conversion_rate}</h3>
            <label htmlFor="slider">Set Value <input
                type="range"
                id="slider"
                min="1"
                max='100'
                step='1'
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            ></input></label>
            <p>Note - 1 {rate.base_code} = {rate.conversion_rate} {rate.target_code}</p>
        </div>
    )
}