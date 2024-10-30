import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleClick(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function clickItem(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => clickItem(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleClick(item)}
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
