// import '../../assets/css/row.css'
import Todo from '../../moduls/todo'
const Row:React.FC<{todo:Todo,number?:number|string,deleteBtn?:boolean,onClick?:any}> = (props) => {
        return ( <
            div className = "rowOfTable" >
            <span className = 'numCel' > { props.number } </span> 
            <span className = 'commonCel' > { props.todo.title } </span> 
             <span className = 'descriptionCel' > { props.todo.description } </span>  <
            span className = 'commonCel' > { props.todo.dueDate } </span>  
            <span className = 'commonCel'> {
                (props.deleteBtn === true) ? <button  className = 'm-0  w-9/12 text-center bg-rose-600 text-rose-800 border-solid border-2 border-rose-600 rounded-md'
                onClick = { props.onClick }> Delete </button> :"" } </span > </div>
            )
         
        }
        export default Row;