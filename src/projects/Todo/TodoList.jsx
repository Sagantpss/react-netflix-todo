import { MdCheckCircleOutline, MdDeleteForever } from "react-icons/md";
export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button
        className="todo-check-button"
        onClick={() => onHandleCheckTodo(data)}
      >
        <MdCheckCircleOutline />
      </button>
      <button
        className="todo-delete-button"
        onClick={() => onHandleDeleteTodo(data)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
