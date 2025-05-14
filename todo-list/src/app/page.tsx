"use client";
import React, { useCallback, useState } from "react";
import styles from "./global.module.css";
import Input from "./ui/input/Input";
import TodoList from "./components/TodoList";

const HomePage = () => {
  type Todo = {
    task: string;
    id: number;
    completed: boolean;
  };

  const [theme, setTheme] = useState("light");
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoLists] = useState<Todo[]>([]);

  const createTodoList = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const todoList = {
      task: todo,
      id: Number(new Date()),
      completed: false,
    };
    if (todo.length === 0) {
      return false;
    }
    setTodoLists([...todoLists, todoList]);
    setTodo("");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

    const root = document.documentElement;
    root.style.setProperty(
      "--background-color",
      theme === "light" ? "#222222" : "#f5f5f5"
    );
    root.style.setProperty(
      "--font-color",
      theme === "light" ? "#AAAAAA" : "#333333"
    );
    root.style.setProperty(
      "--border-color",
      theme === "light" ? "#ffffff" : "#000000"
    );
  };

  const handleDeleteTask = useCallback(
    (task: Todo) => {
      return setTodoLists(todoLists.filter((todo) => todo.id !== task.id));
    },
    [todoLists]
  );

  const handleCompleted = (todo: Todo) => {
    todo.completed = !todo.completed;
    return setTodoLists([...todoLists]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Список задач</h1>
        <button className={styles.changeTheme} onClick={toggleTheme}>
          Изменить тему
        </button>
      </div>
      <form className={styles.addForm}>
        <Input
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTodo(e.target.value);
          }}
          className={styles.addInput}
          type={"text"}
          placeholder={"Введите вашу задачу"}
        />
        <button
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            createTodoList(e);
          }}
          className={styles.addBtn}
        >
          Добавить
        </button>
      </form>
      <TodoList
        todoLists={todoLists}
        handleDeleteTask={handleDeleteTask}
        handleCompleted={handleCompleted}
      />
    </div>
  );
};

export default HomePage;
