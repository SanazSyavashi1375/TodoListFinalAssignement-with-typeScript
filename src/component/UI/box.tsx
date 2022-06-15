import React from 'react';
// import '../../assets/css/box.css'
const Box:React.FC<{children : React.ReactNode}> = (props) => {
        return ( <div className='flex flex-col items-center justify-center m-8  w-full' > { props.children } </div>)
        }
        export default Box;