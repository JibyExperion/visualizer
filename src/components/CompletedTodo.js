import React from "react";
import { useTodoStore } from "../context/todoContext";

import { observer } from "mobx-react";

const CompletedTodo = observer(() => {
  const todoStore = useTodoStore();
  return (
    <div className="complete">
      <h4>Finished Task</h4>
      <ul>
        {todoStore.todoList.map((el) => {
          if (el.done) {
            return (
              <li key={el.id} className="item">
                <p>{el.content}</p>
                <button
                  onClick={() => {
                    todoStore.incomplete(el);
                  }}
                >
                  Undo
                </button>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
});
export default CompletedTodo;
