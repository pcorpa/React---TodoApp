import "./App.css";
import { TodoAdd, TodoList } from "./components";
import { useTodo } from "./hooks";
import type { Todo } from "./interfaces";
import { type JSX } from "react";

const initialState: Todo[] = [
  {
    id: Date.now().toString(),
    description: "",
    completed: false,
  },
];

function App(): JSX.Element {
  const {
    todos,
    onNewTodo,
    onRemoveTodo,
    onCompleteTodo,
    todoCounter,
    pendingCounter,
  } = useTodo({
    initialState,
  });

  return (
    <>
      <h1>
        To do: ({todoCounter})<small>. Pendientes: ({pendingCounter})</small>
      </h1>
      <hr />
      <div className="row">
        <TodoList
          todos={todos}
          onRemoveTodo={onRemoveTodo}
          onCompleteTodo={onCompleteTodo}
        />
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
