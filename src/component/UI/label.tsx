import React from 'react';
import '../../assets/css/label.css'

const Label:React.FC<{id:string , label:string}> = (props) => {
    return ( <label className = "label"
        htmlFor = { props.id } > { props.label } </label>
    )
}
export default Label;