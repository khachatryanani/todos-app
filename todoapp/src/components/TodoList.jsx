import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, setTodos }) {
  const sorted = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todoList}>
      {sorted.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
