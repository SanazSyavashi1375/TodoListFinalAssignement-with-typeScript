import React from 'react';
// import '../../assets/css/addButton.css';
const AddButton:React.FC<{onClick:any}> = (props) => {
    return ( 
        <div className = "flex items-center text-center justify-center m-8  w-full" >
        <button onClick = { props.onClick } className="w-2/6 rounded-md border-solid border-2 border-l-emerald-700 bg-lime-500  text-emerald-700 hover:bg-lime-300 "> Add </button> 
        </div>
    )
}
export default AddButton;