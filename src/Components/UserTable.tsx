import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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


  useEffect(()=>{
    axios.get(usersUrl)
    .then((response)=>{
      setUsers(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
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

