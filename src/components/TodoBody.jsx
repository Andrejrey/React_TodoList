import { useState } from "react";
import TodoTasks from "./TodoTasks";
import AddIcon from "@mui/icons-material/Add";
import TaskStats from "./TaskStats";
import TodoMessages from "./TodoMessages";

export default function TodoBody({
  addTask,
  task,
  onComplete,
  clearAll,
  onDelete,
  onEdit,
  editTask,
  onFilter,
  setMessage,
  message,
  filteredTask,
}) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (title === "" || !title.replace(/\s/g, "").length) {
      setMessage(true);
    } else {
      setMessage(false);
      addTask(title);
      setTitle("");
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <div className="container">
        <TaskStats task={task} onFilter={onFilter} setMessage={setMessage} />
        <form onSubmit={handleSubmit} className="todo-input">
          <input
            id="enter"
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="Type task..."
          ></input>
          <button id="plus">
            <AddIcon />
          </button>
        </form>
        <TodoMessages
          message={message}
          filteredTask={filteredTask}
          task={task}
        />
        <div className="tasksInput">
          {task.map(function (task) {
            return (
              <TodoTasks
                key={task.id}
                task={task}
                onComplete={onComplete}
                onDelete={onDelete}
                onEdit={onEdit}
                editTask={editTask}
                title={title}
                setTitle={setTitle}
                setMessage={setMessage}
              />
            );
          })}
        </div>
        {task.length > 1 && (
          <button onClick={clearAll} id="clear">
            Clear All
          </button>
        )}
      </div>
    </>
  );
}
