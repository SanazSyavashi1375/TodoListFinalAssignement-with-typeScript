import Label from "./label"
import '../../assets/css/textArea.css'
import React from "react";
const TextArea:React.FC<{id:string,value:any , onChange:any,label:string}>=props=>{
    return ( <div className = "textArea" >
    <Label id={props.id} label={props.label}/>
    <textarea id={props.id} value={props.value} onChange={props.onChange}  /> 
    </div>
)
}
export default TextArea;