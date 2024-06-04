import TodoList from "./TodoList";
import TaskForm from "./TaskForm";
import { useState } from "react";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((t) => t.done).length;
  const totlaTodos = todos.length;
  return (
    <div>
      <TaskForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totlaTodos} />
    </div>
  );
}
