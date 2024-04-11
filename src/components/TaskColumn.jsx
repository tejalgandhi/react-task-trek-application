import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ icon, columnName, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {columnName}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              task={task}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
      {/* <TaskCard /> */}
    </section>
  );
};

export default TaskColumn;
