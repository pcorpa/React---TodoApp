import type { Action, Todo } from "../interfaces";

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      const newState = state.filter((todo) => todo.id != action.payload);
      return newState;

    case "COMPLETE":
      const newStateCompleted = state.map((todo) => 
        todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
      );
      return newStateCompleted;
      

    case "EDIT":
      const newStateEdited = state.map((todo) => 
        todo.id === action.payload.id ? {...todo, description: todo.description} : todo
      );
      return newStateEdited;

    default:
      break;
  }
  return state;
};
