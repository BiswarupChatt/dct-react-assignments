import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Assignment10() {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCOuntry] = useState("")
    const [neighbors, setNeighbors] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/all`)
            .then((response) => {
                const result = response.data
                setCountries(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        if (selectedCountry) {
            const country = countries.find((ele) => ele.cca3 === selectedCountry)
            if (country.borders) {
                // const result = countries.filter((ele) => {
                //     return country.borders.includes(ele.cca3)
                // })
                // setNeighbors(result)
                axios.get(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}`)
                .then((response)=>{
                    const result = response.data
                    setNeighbors(result)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        }
    }, [selectedCountry])



    return (
        <div>
            <h1>Assignment 10</h1>
            <select value={selectedCountry} onChange={(e) => {
                setSelectedCOuntry(e.target.value)
            }}>
                <option value="">Select Countries</option>
                {countries.map((ele, i) => {
                    return <option key={i} value={ele.cca3}>{ele.name.common}</option>
                })}
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {neighbors.map((ele) => {
                        return (
                            <tr>
                                <td>
                                    <img src={ele.flags.svg} width='64'/>
                                </td>
                                <td>{ele.name.common}</td>
                                <td>{ele.capital}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}