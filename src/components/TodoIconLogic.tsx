import type { JSX } from "react";
import type { Todo } from "../interfaces";

interface TodoProps {
  todo: Todo;
  onCompleteTodo: (id: string) => void;
}

export const TodoIconLogic = ({
  todo,
  onCompleteTodo,
}: TodoProps): JSX.Element => {
  return (
    <i
      className={`bi ${
        todo.completed
          ? "bi-check-square-fill color:28a745 "
          : "bi-square color:dc3545"
      } mx-4`}
      onClick={() => onCompleteTodo(todo.id)}
    ></i>
  );
};
