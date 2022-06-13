import React from 'react';
import'../../assets/css/section.css'
const Section:React.FC<{children:React.ReactNode}> =(props)=>{
return(
    <div className="section">{props.children}</div>
)
}
export default Section;