import type { Todo } from "./index";

// export interface Action {
//     type: "ADD" | "REMOVE"| "COMPLETE" | "EDIT", 
//     payload?: Todo[];
// };

export type Action =
  | { type: "ADD"; payload: Todo }
  | { type: "REMOVE"; payload: string } 
  | { type: "COMPLETE"; payload: string } 
  | { type: "EDIT"; payload: Todo };