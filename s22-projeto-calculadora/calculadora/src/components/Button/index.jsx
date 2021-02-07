import React from "react";
import "./styles.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ operation, double, triple, click, label }) => {
  return (
    <button
      className={`
            button 
            ${operation ? "operation" : ""}
            ${double ? "double" : ""}
            ${triple ? "triple" : ""}
      `}
      onClick={(e) => click && click(label)}
    >
      {label}
    </button>
  );
};
