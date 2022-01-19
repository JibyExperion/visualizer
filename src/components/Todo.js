import React, { useState } from "react";

import ListTodo from "./ListTodo";

import CompletedTodo from "./CompletedTodo";
import IncompleteTodo from "./IncompleteTodo";
import { observer } from "mobx-react";

import { useTodoStore } from "../context/todoContext";

const Todo = observer(() => {
  const todoStore = useTodoStore();

  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div className="input-todo">
        <input
          type="text"
          value={value}
          id="outlined-basic"
          label="Add Todo"
          onChange={(e) => setValue(e.target.value.trim())}
        />
        <button
          onClick={() => {
            if (value !== "") {
              todoStore.addTodo(value);
            }
            setValue("");
          }}
        >
          Add
        </button>
      </div>
      <div container spacing={3}>
        <div item xs={6}>
          <div style={{ borderRight: "2px solid #777", height: "70vh" }}>
            <ListTodo />
          </div>
        </div>
        <div item xs={3}>
          <div style={{ borderRight: "2px solid #777", height: "70vh" }}>
            <CompletedTodo />
          </div>
        </div>
        <div item xs={3}>
          <div style={{ height: "70vh" }}>
            <IncompleteTodo />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Todo;
