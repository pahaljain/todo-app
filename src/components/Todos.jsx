import React from "react";

function Todos() {
  return (
    <div className="w-3/5 h-96 bg-slate-600 text-white flex flex-col items-center rounded-md">
      <h1 className="text-3xl">Todos</h1>
      <ul className="m-2 p-4">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
}

export default Todos;
