import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
      const [inputValue, setInputValue] = useState({});
      const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", checked: false });
      }
    return (
        <div className="todo-form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              className="todo-input"
              type="text"
              placeholder="Add Todo"
              autoComplete="off"
              value={inputValue.content}
              onChange={(event) => {
                handleInputChange(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className="todo-button">
              Add
            </button>
          </div>
        </form>
      </div>
    );
};