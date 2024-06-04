import { useState } from "react";
import styles from "./TaskForm.module.css";
export default function TaskForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todofrom} onSubmit={handleSubmit}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.taskinput}
          placeholder="Enter todo item..."
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
        ></input>
        <button className={styles.taskbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
