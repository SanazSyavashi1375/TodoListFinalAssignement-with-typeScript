import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import '../../assets/css/error.css'
const BackDrop:React.FC<{onClick:()=>void}> = (props) => {
    return <div className = "backdrop"
    onClick = { props.onClick } > </div>
}
const ModalOverlay:React.FC<{children:React.ReactNode}> = (props) => {
    return ( <div className = "modal" >
        <div className = "content" > { props.children } </div> </div >
    )
}
const ErrorModule:React.FC<{onClose:any,error:string}> = (props) => {
        const portal:HTMLElement|Element | DocumentFragment|null|any = document.getElementById('error')
        return ( <Fragment> {
                    ReactDOM.createPortal( <BackDrop onClick = { props.onClose }/> ,portal) } {
                        ReactDOM.createPortal( <ModalOverlay > { props.error } </ModalOverlay>,portal)}

                            </Fragment> 
                        )
                    }
                    export default ErrorModule;