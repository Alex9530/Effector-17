import { useUnit } from "effector-react";

import { todoStore, addTodo, removeTodo } from "../Store/ItemsStore";
import { useState } from "react";

const TodoList = () => {
  const todos = useUnit(todoStore);
  const [inputValue, setinputValue] = useState("");

  const handelAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setinputValue("");
    }
  };
  return (
    <div>
      <div className="flex gap-5 my-5">
        <input
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          className="flex-1 py-1 px-4 boder border-gray-500 rounded hover:text-indigo-800 bg-neutral-300"
          type="text"
        />
        <button
          onClick={handelAddTodo}
          className="border rounded border-gray-500 p-2 transition-colors hover:bg-pink-300 hover:text-indigo-800 bg-red-200 ">
          Добавление
        </button>
      </div>
      <ul>
      {todos.map((todo,index)=>(

          // eslint-disable-next-line react/jsx-key
          <li className="flex justify-between">
            <span className="text-2xl font-black hover:text-indigo-800">
              {todo}
            </span>
            <button
            onClick={()=>removeTodo(index)}
            className="border rounded border-gray-500 p-2 transition-colors hover:bg-pink-300 hover:text-indigo-800 bg-red-200 ">
              Удалить
            </button>
          </li>
      ))}
        
      </ul>
    </div>
  );
};

export default TodoList;
