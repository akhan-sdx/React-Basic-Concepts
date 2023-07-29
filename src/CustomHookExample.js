import useMousePosition from "./CustomHooks/MousePositionHook";
import useToDo from "./CustomHooks/ToDoReactHook";
import { useState } from "react";

const MousePositionComponent = () => {
  const { x, y } = useMousePosition();
  const { addToDo, deleteTodo, toDo } = useToDo();
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      addToDo(newTodoText);
      setNewTodoText("");
    }
  };

  return (
    <div>
      <p>Mouse X: {x}</p>
      <p>Mouse Y: {y}</p>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      {toDo.map((val) => (
        <li key={val.id}>
          {val.text}
          <button onClick={() => deleteTodo(val.id)}>Delete</button>
        </li>
      ))}

      <button onClick={handleAddTodo}>Add Todo</button>

    </div>
  );
};

export default MousePositionComponent;
