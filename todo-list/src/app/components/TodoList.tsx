import React from "react";
import styles from "../global.module.css";

type todoListProps = {
  todoLists: {
    id: number;
    task: string;
    completed: boolean;
  }[];
  handleDeleteTask: (todo: { id: number; task: string; completed: boolean }) => void;
  handleCompleted: (todo: { id: number; task: string; completed: boolean }) => void;
}

const TodoList = ({ todoLists, handleDeleteTask, handleCompleted }: todoListProps) => {
  return (
    <div>
      {todoLists.map((todo: any) => (
        <div className={styles.todoList} key={todo.id}>
          <input onClick={() => handleCompleted(todo)} type="checkbox" />
          <span
            className={
              todo.completed ? styles.lineThrough : styles.defaultStyle
            }
          >
            {todo.task}
          </span>
          <button onClick={() => handleDeleteTask(todo)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
