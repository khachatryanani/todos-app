import styles from "./TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    var filtered = todos.filter((t) => t !== item);
    setTodos(filtered);
  }
  function handleClick(name) {
    const updated = todos.map((t) =>
      t.name === name ? { ...t, done: !t.done } : t
    );
    setTodos(updated);
  }
  const classN = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classN} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button className={styles.delete} onClick={() => handleDelete(item)}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
