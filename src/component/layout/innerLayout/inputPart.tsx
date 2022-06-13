import Input from "../../UI/input"
import Section from "../../UI/section"
import TextArea from "../../UI/textArea";
import { useDispatch } from "react-redux";
import { todoInformationAction } from "../../../store/getTodoInfo"
import React from "react";
import Todo from "../../../moduls/todo";
const InputParts:React.FC<{todo:Todo}> = (props) => {

    const dispatch = useDispatch();
    const getTitleHandler = (event:any) => {
        dispatch(todoInformationAction.setTitle(event.target.value));
    }
    const getDueDateHandler = (event:any) => {
        dispatch(todoInformationAction.setDueDate(event.target.value));
    }
    const getDescriptionHandler = (event:any) => {
        dispatch(todoInformationAction.setDescription(event.target.value));
    }
    return ( <>
        <Section>
        <Input label = "Title"
       
            type= "text" id= "title" value= {props.todo.title} onChange= {getTitleHandler} 
    
        /> <Input label = "Due Date"
    
            type= "date" id= "dueDate" value={ props.todo.dueDate} onChange={ getDueDateHandler }
        /> </Section >
         < TextArea label = "Description"
       
             id= 'description' value={ props.todo.description} onChange={ getDescriptionHandler }
        
/> </> )
}
export default InputParts;