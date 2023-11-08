import { useState } from "react";
import Product from "./Product-label";
import { v4 as uuidv4 } from "uuid";
import TodoWrapper from "./TodoWrapper";
uuidv4();

const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Product addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoWrapper
          task={todo}
          key={index}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default List;
