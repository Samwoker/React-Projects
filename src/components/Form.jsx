import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",done:false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTodo({name:e.target.value})}
            value={todo.name}
            placeholder="Enter todo item..."
          />
          <button
            className={styles.btn}
            onChange={(e) => setTodo(e)}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
