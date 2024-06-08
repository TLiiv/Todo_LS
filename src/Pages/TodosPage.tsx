import { Todos } from "../Components/Todos";

export interface ITodosProps {
}

export default function TodosPage (props: ITodosProps) {
  return (
    <div>
      <Todos />
    </div>
  );
}
