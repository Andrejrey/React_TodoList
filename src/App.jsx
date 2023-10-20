import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoBody from "./components/TodoBody";

const LOCAL_STORAGE_KEY = "todo:savedTask";

function App() {
  const [task, setTask] = useState([]);
  const [filteredTask, setFilteredTask] = useState("all");
  const [message, setMessage] = useState(false);
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTask(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTaskAndSave(newTask) {
    setTask(newTask);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));
  }

  function addTask(taskTitle) {
    setTaskAndSave([
      ...task,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        done: false,
        edit: false,
      },
    ]);
  }

  function deleteTaskById(taskId) {
    const newTask = task.filter((task) => task.id !== taskId);
    setTaskAndSave(newTask);
    setMessage(false);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = task.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTaskAndSave(newTasks);
  }

  function clearAll() {
    setTaskAndSave([]);
  }

  function toggleEditById(taskId) {
    setTask(
      task.map((task) =>
        task.id === taskId
          ? {
              ...task,
              edit: !task.edit,
            }
          : task
      )
    );
  }

  function editTask(title, taskId) {
    setTaskAndSave(
      task.map((task) =>
        task.id === taskId ? { ...task, title, edit: !task.edit } : task
      )
    );
  }

  let filteredTaskArray = task.filter((task) => {
    if (filteredTask === "completed") {
      return task.done === true;
    } else if (filteredTask === "inProgress") {
      return task.done === false;
    } else {
      return task;
    }
  });

  function onFilterValueSelected(filterValue) {
    setFilteredTask(filterValue);
  }

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  return (
    <div id={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TodoBody
        addTask={addTask}
        task={filteredTaskArray}
        onComplete={toggleTaskCompletedById}
        clearAll={clearAll}
        onDelete={deleteTaskById}
        onEdit={toggleEditById}
        editTask={editTask}
        onFilter={onFilterValueSelected}
        setMessage={setMessage}
        message={message}
        filteredTask={filteredTask}
      />
    </div>
  );
}

export default App;
