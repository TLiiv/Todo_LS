import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../Hooks/use-local-storage";


interface Props {
}

 type User = {
  id: string;
  name: string;
  email:string;
}

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const UserTable: React.FC<Props> = (props: Props) => {

  const [users,setUsers] = useState<User[]>([]);
  //const [users,setUsers] = useLocalStorage<User[]>('users',[]);


  const getUserData = async () => {
    try{
      const response = await axios.get(usersUrl);
      setUsers(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getUserData();
  },[]);

  //Rerender when users are updated
  useEffect(()=>{
  },[users])

  const userTableInfo = users.map((user) => (
    <tr key={user.id}>
      <td><Link to={`/todos/${user.id}`}>{user.name}</Link></td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userTableInfo}
        </tbody>
      </table>
    </div>
  );
};

