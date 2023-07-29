import { useState } from "react";


const useToDo = ()=> {

   const [toDo, setToDo] = useState([])

   const addToDo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setToDo((prevTodos) => [...prevTodos, newTodo]);
    console.log("----->>", newTodo)

   }

   const deleteTodo = (id) => {
    setToDo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
   }

    return {
        toDo,
        addToDo, deleteTodo
    }
}

export default useToDo;