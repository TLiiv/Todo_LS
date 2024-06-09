import { UserTodos } from "../Components/UserTodos";

export interface ITodosProps {
}

export default function TodosPage (props: ITodosProps) {
  return (
    <div>
      <UserTodos />
    </div>
  );
}
