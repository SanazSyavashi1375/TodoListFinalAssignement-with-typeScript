import Box from "../UI/box"
import ButtonAdd from "./innerLayout/addButton";
import InputParts from "./innerLayout/inputPart";
import { useSelector } from "react-redux";
import Todo from "../../moduls/todo";


const GetInformation = () => {
    const title = useSelector((state:any) => state.todoInfo.title);
    const dueDate = useSelector((state:any) => state.todoInfo.dueDate);
    const description = useSelector((state:any) => state.todoInfo.description);


let todo:Todo={
    title:title,
    dueDate:dueDate,
    description:description

}

    return ( <>
        <Box>
        <InputParts todo={todo}
        /> <ButtonAdd todo={todo}
        /> </Box > </>
    )
}
export default GetInformation;