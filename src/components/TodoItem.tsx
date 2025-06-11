import type { JSX } from "react";
import type { Todo } from "../interfaces";
import { TodoIconLogic } from "../components";

interface TodoItemProps {
  todo: Todo;
  onClick: (id: string) => void;
  onCompleteTodo: (id: string) => void;
}

export const TodoItem = ({
  todo,
  onClick,
  onCompleteTodo,
}: TodoItemProps): JSX.Element => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
      <div className="justify-content-end ">
        <TodoIconLogic
          todo={todo}
          onCompleteTodo={() => onCompleteTodo(todo.id)}
        />
        <button onClick={() => onClick(todo.id)} className="btn btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
};
