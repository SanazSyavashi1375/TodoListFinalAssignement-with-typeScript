import React from 'react'
import '../../assets/css/input.css'
import Label from './label'

const Input:React.FC<{type:any,id:string,value:any , onChange:any,label:string}> = props => {
    return (
         <div className = "input" >
        <Label id = { props.id }
        label = { props.label }
        /> <input 
        type= {props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        required/>
        </div>
    )
}
export default Input;