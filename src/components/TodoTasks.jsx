import { useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveIcon from "@mui/icons-material/Save";

export default function TodoTasks({
  task,
  onComplete,
  onDelete,
  onEdit,
  editTask,
  title,
  setTitle,
  setMessage,
}) {
  const inputRef = useRef();

  function handleEditedTask() {
    setMessage(false);
    if (title === "") {
      setTitle(title, task.id);
      setTitle("");
    } else {
      editTask(title, task.id);
      setTitle("");
    }
  }

  function focusP() {
    inputRef.current.focus();
  }

  function onEditAndFocus() {
    onEdit(task.id);
    setTimeout(() => {
      focusP();
    }, 100);
    setMessage(false);
  }

  let date = new Date();
  date = date.toString().split(" ");

  return (
    <>
      <div className="tasks">
        <div className="done-with-date-container">
          <button id="completedBtn" onClick={() => onComplete(task.id)}>
            {task.done ? <CheckCircleIcon /> : <div />}
          </button>
          <p className="task-date">
            {date[1] + " " + date[2] + ", " + date[3]}
          </p>
        </div>
        <p
          ref={inputRef}
          onInput={(event) => setTitle(event.currentTarget.textContent)}
          contentEditable={task.edit ? true : false}
          className={
            (task.done ? "textCompleted" : "") + (task.edit ? "onEdit" : "")
          }
          suppressContentEditableWarning={true}
        >
          {task.title}
        </p>
        <div className="edit-buttons">
          <button className="edit" onClick={() => onEditAndFocus()}>
            {task.edit ? <SaveIcon onClick={handleEditedTask} /> : <EditIcon />}
          </button>
          <button onClick={() => onDelete(task.id)} className="delete">
            <DeleteForeverIcon />
          </button>
        </div>
      </div>
    </>
  );
}
