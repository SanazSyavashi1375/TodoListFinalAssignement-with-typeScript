import React from 'react'
import '../../assets/css/borderBox.css'
const BorderBox:React.FC<{children : React.ReactNode}> = (props) => {
        return ( <div className = "borderBox" > { props.children } </div>)
        }
        export default BorderBox;