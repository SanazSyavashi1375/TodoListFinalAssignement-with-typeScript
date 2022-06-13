import AddButton from "../../UI/addButton"
import { useDispatch } from "react-redux";
import { errorAction } from "../../../store/error";
import { todoAction } from "../../../store/todo's";
import { todoInformationAction } from "../../../store/getTodoInfo";
import React from "react";
import Todo from "../../../moduls/todo";
const ButtonAdd:React.FC<{todo:Todo}> = (props) => {
    const dispatch = useDispatch();
    const clickHandler = (event:React.FormEvent) => {
        event.preventDefault();
        if (props.todo.title.trim() === '' || props.todo.dueDate.trim() === '' || props.todo.description.trim() === '') {
            dispatch(errorAction.showError())
        } else {
            dispatch(todoAction.addTodo(props.todo))
            dispatch(todoInformationAction.reset());

        }
    }
    return ( <> <AddButton onClick = { clickHandler }/> </>
    )
}
export default ButtonAdd;