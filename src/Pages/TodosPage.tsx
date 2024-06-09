import { UserTodos } from "../Components/UserTodos";
import { useParams } from "react-router-dom";

export interface ITodosProps {
}

export default function TodosPage (props: ITodosProps) {
  let { id } = useParams<{ id: string }>();

  if(!id){
    return console.log("User id is missing")
  }

  return (
    <div>
      <UserTodos id={id} />
    </div>
  );
}
