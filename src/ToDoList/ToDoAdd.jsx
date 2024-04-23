import React, { useState } from "react";
import ToDoEdit from "./ToDoEdit";
import ToDoDelete from "./ToDoDelete";

const ToDoAdd = () => {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);

  const handleChange = (event) => {
    //console.log(event.target.value);
    setText(event.target.value);
  };

  const handleSubmit = () => {
    let newItem = {
      newText: text,
      newId: new Date().toDateString() + text,
    };
    setItem([...item, newItem]);
    setText("");
  };

  return (
    <div>
      <input type="text" placeholder="Enter item..." onChange={handleChange} />
      <button style={{ backgroundColor: "blue" }} onClick={handleSubmit}>
        Submit
      </button>
      {
        item.map((element) => {})
      }
      <ol>
        <li></li>
      </ol>
    </div>
  );
};

export default ToDoAdd;
