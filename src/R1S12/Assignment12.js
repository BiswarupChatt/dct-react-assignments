import { useState } from "react"

export default function Assignment12 (){

    const colorList = ['red', 'green', 'blue', 'yellow' , 'pink']

    const [color, setColor] = useState("")

    const handleChange = (e)=>{
        setColor(e.target.value)
    }
    return(
        <div>
            <div style={{position: 'relative', zIndex:1}}>
                <h1>
                    Assignment 12
                </h1>
                <select name="" onChange={handleChange} >
                    <option value="">Select Color</option>
                   { colorList.map((ele, i)=>{
                        return(
                            <option key={i} value={ele}>{ele}</option>
                        )
                    })}
                </select>
            </div>
            <div style={{backgroundColor: color, width: '100%', height: '100vh', position: 'absolute', left: 0, top: 0}}></div>
        </div>
    )
}