import TodoTasks from "./todoTasks"
import AddIcon from '@mui/icons-material/Add';



export default function TodoBody() {
    return (
        <>
        <main>
            <div className="container">
                <div className="todo-input">
                    <input id="enter" type="text" placeholder="Type Task..."></input>             
                        <button id="plus">
                            <AddIcon color="disabled"/>
                        </button>    
                </div>
                <div >
                    <p id="message">You need to write something in the input!</p>
                </div>
                <div className="tasksInput">
                <TodoTasks/>
                </div>
                <button id="clear">
                    Clear All
                </button>
            </div>     
        </main>
        </>
    )
    
}