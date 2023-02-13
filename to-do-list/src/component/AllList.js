import React from "react";

export default function AllList({ tasks, handleDone, handleDelete }) {
  return (
    <div>
      {tasks.map((item, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row" }}>
          <span
            style={{
              border: "1px solid grey",
              marginTop: "10px",
              width: "auto",
              alignContent: "center",
            }}
          >
            {item.taskName}
            {item.taskDone ? "   ====   completed" : ""}
            <button
              onClick={() => handleDelete(i)}
              style={{
                backgroundColor: "red",
                marginLeft: "80px",
              }}
            >
              Delete Task
            </button>
            <button
              onClick={() => handleDone(i)}
              style={{ backgroundColor: "#F7C00F", margin: "15px" }}
            >
              Set to Done
            </button>
          </span>
        </div>
      ))}{" "}
    </div>
  );
}
