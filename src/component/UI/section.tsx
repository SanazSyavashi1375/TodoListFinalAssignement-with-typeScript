import React from 'react';
// import'../../assets/css/section.css'
const Section:React.FC<{children:React.ReactNode}> =(props)=>{
return(
    <div className="flex flex-row justify-between w-full m-0 p-0">{props.children}</div>
    
)
}
export default Section;