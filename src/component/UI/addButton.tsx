import React from 'react';
import '../../assets/css/addButton.css';
const AddButton:React.FC<{onClick:any}> = (props) => {
    return ( 
        <div className = "addButton" >
        <button onClick = { props.onClick }> Add </button> 
        </div>
    )
}
export default AddButton;