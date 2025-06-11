import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers";
import type { Todo } from "../interfaces";

interface UseTodoProps {
  initialState: Todo[];
}

interface UseTodoReturnProps {
  todos: Todo[];
  todoCounter: number;
  pendingCounter: number;
  onNewTodo: (description: string) => void;
  onRemoveTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
}

const init = (): Todo[] => {
  return JSON.parse(localStorage.getItem("todos") ?? "[]");
};

export const useTodo = ({ initialState }: UseTodoProps): UseTodoReturnProps => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const pendingCounter = todos.filter((todo) => !todo.completed).length;
  const todoCounter = todos.length;

  const onNewTodo = (description: string): void => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      description,
      completed: false,
    };

    dispatchTodo({ type: "ADD", payload: newTodo });
  };

  const onRemoveTodo = (id: string): void => {
    dispatchTodo({ type: "REMOVE", payload: id });
  };
  const onCompleteTodo = (id: string): void => {
    dispatchTodo({ type: "COMPLETE", payload: id });
  };
  return {
    ...todos,
    todos,
    onNewTodo,
    onCompleteTodo,
    onRemoveTodo,
    todoCounter,
    pendingCounter,
  };
};
