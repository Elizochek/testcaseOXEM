import './Input.scss'
import {useState} from "react"



export function Input(props) {
    const[num,setNum]=useState(0)
    
    function handleChange(event){
        props.onChange(event.currentTarget.value)
        setNum(event.currentTarget.value)
    }

   
    return ( 
        <div className="container">
    <p>{props.name}</p>
    <input className="text"
    name={props.name}
    type="text"
    placeholder={props.placeholder}
    onChange={handleChange} 
    />
        <input className='range'
        name={props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        type="range"
        value={num}
        onChange={handleChange} 
            />
        <div className="details"> {props.test} </div>
            </div>
    )
}