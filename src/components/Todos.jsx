import React, { useState } from "react";

function Todos({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");
  const addTodo = () => {
    if (todoText.length > 0) {
      setTodos([...todos, todoText]);
    }
    setTodoText("");
    console.log(todos);
  };

  return (
    <div className="w-2/5 h-96 p-8 bg-slate-600 flex flex-col items-center rounded-md">
      <div className="w-4/5 h-5 p-3 border-blue-300 rounded-md flex flex-row">
        <input
          type="text"
          name="createTodo"
          id="createTodo"
          placeholder="Add Text to create Todo"
          className="bg-white text-blue text-lg w-4/5 h-10 p-2"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button className="text-white bg-blue-900 w-40 h-10" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <div className="flex flex-col m-3">
        <h1 className="text-3xl p-5 m-5">Todos</h1>
        <ul className="m-1">
          {todos.map((todo, id) => (
            <li key={id}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
