import { useState } from "react";
import "./App.css";
import AllList from "./component/AllList";

function App() {
  const [task, setTask] = useState({
    taskName: "",
    taskDone: false,
  });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (tasks.some((item) => item.taskName === task.taskName) === false) {
      setTasks([...tasks, task]);
    }
  };

  const handleDone = (index) => {
    const updateTasks = tasks.map((item, i) =>
      index === i ? { ...item, taskDone: !item.taskDone } : item
    );
    setTasks(updateTasks);
  };

  const handleDelete = (index) => {
    const updateTasks = tasks.filter((item, i) => i !== index);
    setTasks(updateTasks);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <br />
        <label>Define Your task</label>

        <input onChange={handleChange} name="taskName" type="test" />
        <button>Add a task</button>
      </form>
      <AllList
        tasks={tasks}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
