export default function TaskStats({task, onFilter}) {

    let date = new Date();
    date = date.toString().split(" ")
    const taskQuantity = task.length;
    const completedTasks = task.filter(task => task.done).length;

    function filteredTask(event) {
        onFilter(event.target.value);
    }

    return (
        <div id="quantity-container">
            <p id="task-quantity">Created tasks: <span id="task-quantity-number">{taskQuantity}</span></p>
            <p id="date">Date: {date[1] + " " + date[2] + " " + date[3]}</p>
            <div className="filter">
                <select name="filteredTask" id="filterSelect" onChange={filteredTask}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="inProgress">In Progress</option>
                </select>
            </div>
            <p id="complited-quantity">Tasks completed <span id="complited-quantity-number">{completedTasks} of {taskQuantity}</span></p>
        </div> 
          
    )
}