import '../../assets/css/row.css'
import Todo from '../../moduls/todo'
const Row:React.FC<{todo:Todo,number?:number|string,deleteBtn?:boolean,onClick?:any}> = (props) => {
        return ( <
            div className = "rowOfTable" >
            <span className = 'number' > { props.number } </span> 
            <span className = 'simpleCel' > { props.todo.title } </span> 
             <span className = 'description' > { props.todo.description } </span>  <
            span className = 'simpleCel' > { props.todo.dueDate } </span>  
            <span className = 'simpleCel' > {
                (props.deleteBtn === true) ? <button className = 'deleteBtn'
                onClick = { props.onClick }> Delete </button> :"" } </span > </div>
            )
        }
        export default Row;