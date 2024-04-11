import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ task, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{task.task}</p>
      <div className="task_card_bottom_lines">
        <div className="task_card_tags">
          {task.tags.map((tag, index) => {
            return <Tag key={index} tagName={tag} selected={true} />;
          })}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="task_card_icon"></img>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
