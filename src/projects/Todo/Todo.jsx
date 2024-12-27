import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const TodoKey = "reacTodos";

export const Todo = () => {
  const [todos, setTodos] = useState(()=>{
    const localTodos = localStorage.getItem(TodoKey);
    return localTodos ? JSON.parse(localTodos) : [];
  });
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return; // To check if the input is empty or not
    // To check if the task is already added
    const ifTodoContentMatched = todos.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTodos((prevTask) => [...prevTask, { id, content, checked }]);
    console.log("Todos", todos);
  };

  // Add data to local storage
  localStorage.setItem(TodoKey, JSON.stringify(todos));

  // delete task
  const handleDeleteTodo = (value) => {
    const updatedTodos = todos.filter((curTask) => curTask.content !== value);
    console.log("Update Task", updatedTodos);
    setTodos(updatedTodos);
  };

  // Clear all tasks
  const handleClearAll = () => {
    setTodos([]);
  };

  // check task
  const handleCheckTodo = (value) => {
    const updatedTodos = todos.map((curTask) => {
      if (curTask.content === value) {
        return { ...curTask, checked: !curTask.checked };
      }
      return curTask;
    });
    setTodos(updatedTodos);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />
      <div className="todo-list">
        <ul>
          {todos.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckTodo={handleCheckTodo}
              />
            );
          })}
        </ul>
        <button className="clear-all-button" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
};
