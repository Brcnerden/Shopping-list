import { useEffect, useState } from "react";
import Product from "./Product-label";
import { v4 as uuidv4 } from "uuid";
import TodoWrapper from "./ShoppingList/ShoppingList";

uuidv4();

const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    if (todos.length >= 8) {
      alert("Alışveriş Tamamlandı");
    }
  }, [todos]);

  return (
    <div>
      <Product addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoWrapper task={todo} key={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default List;
