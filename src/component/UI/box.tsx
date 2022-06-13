import React from 'react';
import '../../assets/css/box.css'
const Box:React.FC<{children : React.ReactNode}> = (props) => {
        return ( <div className = "box" > { props.children } </div>)
        }
        export default Box;