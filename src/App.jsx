import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import TodoBody from './components/todoBody'

const LOCAL_STORAGE_KEY = "todo:savedTask";

function App() {
const [task, setTask] = useState([]);
const [filteredTask, setFilteredTask] = useState("all");

function loadSavedTasks() {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(saved) {
    setTask(JSON.parse(saved))
  }
}

useEffect(() => {
  loadSavedTasks();
}, [])

function setTaskAndSave(newTask) {
  setTask(newTask);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
}

function addTask(taskTitle){
  setTaskAndSave([
    ...task, 
    {
      id: crypto.randomUUID(),
      title: taskTitle,
      done: false,
      edit: false
    }
  ]);
}

function deleteTaskById(taskId) {
  const newTask = task.filter(task => task.id !== taskId);
  setTaskAndSave(newTask);
}

function toggleTaskCompletedById(taskId) {
  const newTasks = task.map(task => {
    if(task.id === taskId){
      return {
        ...task,
        done: !task.done
      }
    }
    return task;
  })
  setTaskAndSave(newTasks);  
}



function clearAll() {
  setTaskAndSave([]) 
}

function toggleEditById(taskId) {
  setTask(task.map(task => task.id === taskId ? {
    ...task, edit: !task.edit} : task
  ))
}

function editTask(title, taskId) {
  setTaskAndSave(task.map( task => task.id === taskId ? {...task, title, edit: !task.edit} : task))
}

let filteredTaskArray = task.filter((task) => {
  if(filteredTask === "completed"){
    return task.done === true;
  } else if (filteredTask === "inProgress") {
    return task.done === false;
  } else {
    return task;
  }
})

function onFilterValueSelected(filterValue) {
  setFilteredTask(filterValue);
}

  return (
    <>
      <Header />
      <TodoBody 
      addTask={addTask} task={filteredTaskArray} 
      onComplete={toggleTaskCompletedById} 
      clearAll={clearAll} 
      onDelete={deleteTaskById}
      onEdit={toggleEditById}
      editTask={editTask}
      onFilter={onFilterValueSelected}
      />
    </>
  )
}

export default App
