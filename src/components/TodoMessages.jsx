const TodoMessages = ({ message, filteredTask, task }) => {
  return (
    <>
      <div>
        <p id={!message ? "messageNone" : "showMessage"}>
          You need to write something!
        </p>
      </div>
      {task.length === 0 && filteredTask === "all" && !message && (
        <div>
          <p id="showMessage">No tasks.</p>
        </div>
      )}
      {task.length === 0 && filteredTask === "completed" && !message && (
        <div>
          <p id="showMessage">No completed tasks.</p>
        </div>
      )}
      {task.length === 0 && filteredTask === "inProgress" && !message && (
        <div>
          <p id="showMessage">No tasks in progress.</p>
        </div>
      )}
    </>
  );
};

export default TodoMessages;
