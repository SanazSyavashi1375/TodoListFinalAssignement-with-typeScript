import Row from '../UI/row'
import { useDispatch } from 'react-redux';
import { todoAction } from '../../store/todo\'s';
import { useSelector } from 'react-redux';
import Todo from '../../moduls/todo';
const TableOfTodo = () => {
        const dispatch = useDispatch();
         let todosArr = useSelector((state:any) => state.todoArr.todoArr)

        const deleteTodo = (id:any) => {
            dispatch(todoAction.removeTodo(id));
        }
          let todoHeader:Todo={title : 'Title',
          description : 'Description',
          dueDate : 'DueDate'}
        let tableHeader = <Row number = 'No'
       todo={todoHeader}
         /> ;
        let resultArr = [];
        if (todosArr.length > 4) {

            resultArr = todosArr.map((todo:Todo, index:number) => < Row key = { todo.id }
                number = { index + 1 }
                 todo={todo}
                deleteBtn = {true}
                onClick = {
                    () => deleteTodo(todo.id)
                }
                / >  )

            }
            if (4 >= todosArr.length) {
                let emptyRow = 4 - todosArr.length;
                let todosArray = todosArr.map((todo:Todo, index:number) => < Row key = { todo.id }
                        number = { index + 1 }
                        todo={todo}
                        deleteBtn = {true}
                        onClick = {
                            () => deleteTodo(todo.id)
                        }
                        / > )
                        let emptyArr : any[]=[];
                        for (let i = 0; i < emptyRow; i++) {
                            emptyArr = [...emptyArr, <Row key = { Math.floor(Math.random() * 10000) } todo={{title:'',dueDate:'',description:''}}
                                /> ]
                            }
                            resultArr = [...todosArray, ...emptyArr]
                        }

                        return ( <> { tableHeader } { resultArr } </>)
                        }

                        export default TableOfTodo;