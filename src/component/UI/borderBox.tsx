import React from 'react'
// import '../../assets/css/borderBox.css'
const BorderBox:React.FC<{children : React.ReactNode}> = (props) => {
        return ( <div className = "flex flex-col items-center justify-center w-3/6 border-solid border-2 border-black-600  m-16 p-16 w-11/12" > { props.children } </div>)
        }
        export default BorderBox;