import React from "react";
import { useParams } from "react-router-dom";
import { UserTodos } from "../Components/UserTodos";

export interface ITodosProps {}

const TodosPage: React.FC<ITodosProps> = (props: ITodosProps) => {
  const { id } = useParams<{ id: string }>();
  

  if (!id) {
    return <div>User ID is missing</div>;
  }

  return (
    <div>
      <UserTodos id={id} />
    </div>
  );
};

export default TodosPage;

