import React, { useState } from "react";

const Task = ({ item, updateTasks, removeTasks, completeTasks }) => {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("");
  const update = (id, value) => {
    if (edit === true) updateTasks({ id, description: value });
  };
  return (
    <div className="my-2 task">
      <li key={item.id} className="row m-2">
        {edit ? (
          <input
            type="text"
            className="col"
            defaultValue={item.description}
            onChange={(e) => setVal(e.target.value)}
          />
        ) : (
          <input
            type="text"
            className="col"
            defaultValue={item.description}
            readOnly
          />
        )}

        <div className="btns col">
          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              setEdit(!edit);
              update(item.id, val);
            }}
          >
            {edit ? "Update" : "Edit"}
          </button>
          {item.isDone === false && (
            <button
              onClick={() => completeTasks(item.id)}
              className="btn btn-success m-2"
            >
              Done
            </button>
          )}
          <button
            className="btn btn-danger m-2"
            onClick={() => removeTasks(item.id)}
          >
            Remove
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
