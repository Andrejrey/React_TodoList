import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function todoTasks() {
    return (
        <div className="tasks">
                <input className="checkedDone" type="checkbox"></input>
                <textarea id="taskText" disabled>Learn React</textarea>
                <div className="edit-buttons">
                  <button className="edit"><BorderColorIcon color="disabled" /></button>
                  <button className="delete"><DeleteForeverIcon color="disabled"/></button>
                </div>
                <div className="update-buttons">
                  <button id="save">Save</button>
                  <button id="cancel">Cancel</button>
                </div>
              </div>
    )
}