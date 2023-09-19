import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveIcon from "@mui/icons-material/Save";
import { useRef } from "react";

export default function TodoTasks({
  task,
  onComplete,
  onDelete,
  onEdit,
  editTask,
  title,
  setTitle,
}) {
  const inputRef = useRef();
  function handleEditedTask() {
    if (title === "") {
      setTitle(title, task.id);
      setTitle("");
    } else {
      editTask(title, task.id);
      setTitle("");
    }
  }

  function onEditFocus() {
    inputRef.current.focus();
  }

  console.log(inputRef.current);

  return (
    <>
      <div className="tasks">
        <button id="completedBtn" onClick={() => onComplete(task.id)}>
          {task.done ? <CheckCircleIcon /> : <div />}
        </button>
        <p
          ref={inputRef}
          onInput={(event) => setTitle(event.currentTarget.textContent)}
          contentEditable={task.edit ? true : false}
          className={
            (task.done ? "textCompleted" : "") + (task.edit ? "onEdit" : "")
          }
        >
          {task.title}
        </p>
        <div className="edit-buttons">
          <button className="edit" onClick={() => onEdit(task.id)}>
            {task.edit ? (
              <SaveIcon onClick={handleEditedTask} />
            ) : (
              <EditIcon onClick={onEditFocus} />
            )}
          </button>
          <button onClick={() => onDelete(task.id)} className="delete">
            <DeleteForeverIcon />
          </button>
        </div>
        <div className="update-buttons">
          <button id="save">Save</button>
          <button id="cancel">Cancel</button>
        </div>
      </div>
    </>
  );
}
