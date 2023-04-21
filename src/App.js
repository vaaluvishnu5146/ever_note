import React, { useState } from "react";
import Logo from "./assets/images/logo.png";
import { meetingCategories } from "./assets/configs/constants";
import { saveTodo } from "./Redux/Reducers/Tasks.reducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatcher = useDispatch();
  const { tasks = [] } = useSelector((state) => state.tasks);
  const [todo, setTodo] = useState({});

  function handleInput(e) {
    if (e) {
      const todoCopy = {
        ...todo,
      };
      todoCopy[e.target.id] = e.target.value;
      setTodo(todoCopy);
    }
  }

  function handleAddTask(e) {
    if (e) {
      dispatcher(saveTodo(todo));
      setTodo({});
    }
  }

  return (
    <div id="evernote-app-container">
      <div className="brand-navbar">
        <img className="logo" src={Logo} alt="evernote-logo" />
      </div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter your task"
          id="task"
          value={todo["task"] || ""}
          onChange={handleInput}
        />
        <input
          type="date"
          placeholder="Enter your task"
          id="completionDate"
          value={todo["completionDate"] || ""}
          onChange={handleInput}
        />
        <select
          id="taskCategory"
          value={todo["taskCategory"] || ""}
          onChange={handleInput}
        >
          <option>Select the categories</option>
          {meetingCategories.map((_d, i) => (
            <option key={`meeting-categories-${i}`} value={_d.value}>
              {_d.label}
            </option>
          ))}
        </select>
        <button className="add-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div className="todos-container">
        <table>
          <th>
            <td>Task</td>
            <td>Due Date</td>
            <td>Category</td>
          </th>
          {tasks.map((_r, i) => (
            <tr key={`task-list-${i}`}>
              <td>{_r.task}</td>
              <td>{_r.completionDate}</td>
              <td>{_r.taskCategory}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
