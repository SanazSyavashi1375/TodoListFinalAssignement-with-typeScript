import React from 'react';
// import '../../assets/css/label.css'

const Label:React.FC<{id:string , label:string}> = (props) => {
    return ( <label className = "text-xs leading-3 font-bold mr-4 mb-0.5"
        htmlFor = { props.id } > { props.label } </label>
    )
}
export default Label;