import React, { useState } from "react";
import "../App.css";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-300">
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
