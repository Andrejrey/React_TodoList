export default function TaskStats({ task, onFilter, setMessage }) {
  let date = new Date();
  date = date.toString().split(" ");
  const taskQuantity = task.length;
  const completedTasks = task.filter((task) => task.done).length;

  function filteredTask(event) {
    onFilter(event.target.value);
    setMessage(false);
  }

  return (
    <div className="quantity-container">
      <div className="quantity-container-two">
        <p id="date">{date[1] + " " + date[2] + ", " + date[3]}</p>
        <div id="filter">
          <p>Filter:</p>
          <select name="filteredTask" id="filterSelect" onChange={filteredTask}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="inProgress">In Progress</option>
          </select>
        </div>
        <p id="task-quantity">
          Tasks: <span id="task-quantity-number">{taskQuantity}</span>
        </p>
        <div id="complited-quantity">
          <p>Completed:</p>
          <p id="complited-quantity-number">
            {completedTasks} of {taskQuantity}
          </p>
        </div>
      </div>
    </div>
  );
}
