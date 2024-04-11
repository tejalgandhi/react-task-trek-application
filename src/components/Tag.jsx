import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Html: { backgroundColor: "#fda821" },
    Css: { backgroundColor: "#15d4c8" },
    Javascript: { backgroundColor: "#ffd12c" },
    Reactjs: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <div>
      <button
        type="button"
        className="tag"
        style={selected ? tagStyle[tagName] : tagStyle.default}
        onClick={() => selectTag(tagName)}
      >
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
