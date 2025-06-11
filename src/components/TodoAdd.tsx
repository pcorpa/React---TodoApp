import { type JSX } from "react";
import { useForm } from "../hooks/useForm";

interface TodoAddProps {
  onNewTodo: (description: string) => void;
}

export const TodoAdd = ({ onNewTodo }: TodoAddProps): JSX.Element => {
  const { formState, onInputChangeSingle, onResetForm } = useForm("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.length < 1) return;
    onNewTodo(formState);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        value={formState}
        onChange={(event) => onInputChangeSingle(event.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
