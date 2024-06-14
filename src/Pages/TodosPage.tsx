import React from "react";
import { useParams } from "react-router-dom";
import { UserTodos } from "../Components/UserTodos";

export interface TodosPageProps {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  error: string | null;
}

const TodosPage: React.FC<TodosPageProps> = ({ setError, error }) => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    setError("User id is missing!");
    return error;
  }

  return (
    <div>
      <UserTodos id={id} setError={setError} error={error} />
    </div>
  );
};

export default TodosPage;

