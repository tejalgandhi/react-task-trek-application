import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterData = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterData };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  console.log(taskData.tags);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
    // console.log(taskData);
  };

  return (
    <header className="app_header">
      <form onSubmit={handlesubmit}>
        <input
          name="task"
          value={taskData.task}
          className="task_input"
          type="text"
          placeholder="Enter Task Name"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <Tag
            tagName="Html"
            selectTag={selectTag}
            selected={checkTag("Html")}
          />
          <Tag tagName="Css" selectTag={selectTag} selected={checkTag("Css")} />
          <Tag
            tagName="Javascript"
            selectTag={selectTag}
            selected={checkTag("Javascript")}
          />
          <Tag
            tagName="Reactjs"
            selectTag={selectTag}
            selected={checkTag("Reactjs")}
          />
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">Todo</option>
              <option value="progress">Progress</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit"> + Add Task</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
