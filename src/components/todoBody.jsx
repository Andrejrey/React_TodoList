import { useState } from "react";
import TodoTasks from "./todoTasks"
import AddIcon from '@mui/icons-material/Add';
import TaskStats from "./taskStats";


export default function TodoBody({ addTask, task, onComplete, clearAll, onDelete, onEdit, editTask, onFilter }) {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState(false);

    
    
    function handleSubmit(event) {
        event.preventDefault();
        if(title === ""){
            setMessage(true)
        } else {
            setMessage(false)
            addTask(title);
            setTitle("");
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <>
        <main>
        <TaskStats task={task} onFilter={onFilter}/>
            <div className="container">
                <form onSubmit={handleSubmit} className="todo-input">
                    <input id="enter" type="text" value={title} onChange={onChangeTitle} placeholder="Type Task..."></input>             
                        <button id="plus">
                            <AddIcon/>
                        </button>    
                </form>
                <div >
                    <p id={!message ? "messageNone" : "showMessage"}>You need to write something in the input!</p>
                </div>
                <div className="tasksInput">
                {task.map(function (task) {
                return <TodoTasks key={task.id} 
                                  task={task}
                                  onComplete={onComplete} 
                                  onDelete={onDelete} 
                                  onEdit={onEdit} 
                                  editTask={editTask} 
                                  title={title}
                                  setTitle={setTitle}/>
            } ) }
                </div>
                {task.length > 1 && <button onClick={clearAll} id="clear">
                    Clear All
                </button>}
            </div>     
        </main>
        </>
    )
}

