import type { JSX } from "react";
import type { Todo } from "../interfaces";
import { TodoItem } from "../components";

interface GridProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
}

export const TodoList = ({
  todos,
  onRemoveTodo,
  onCompleteTodo,
}: GridProps): JSX.Element => {
  return (
    <div className="col-7">
      <ul className="list-group">
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              onClick={() => onRemoveTodo(todo.id)}
              onCompleteTodo={() => onCompleteTodo(todo.id)}
              todo={todo}
            />
          ))}
      </ul>
    </div>
  );
};
