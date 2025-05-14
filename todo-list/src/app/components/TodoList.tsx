import React, { useState } from "react";
import styles from "../global.module.css";

const TodoList = ({ todoLists, handleDeleteTask, handleCompleted }: any) => {
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
