import ErrorOfFill from "./component/layout/erroOfFill";
import GetInformation from "./component/layout/getInforMation";
import TableOfTodo from "./component/layout/tableOfTodos";
import BorderBox from "./component/UI/borderBox";


function App() {
    return ( <>
        <BorderBox>
        <GetInformation/>
        <TableOfTodo/>
        </BorderBox>  
        <ErrorOfFill/>
        </>
    );
}

export default App;