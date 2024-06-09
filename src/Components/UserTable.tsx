import axios from "axios";
import { useEffect, useState } from "react";


interface Props {

}

 type User = {
  id: string;
  name: string
}

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const UserTable: React.FC<Props> = (props: Props) => {

  const [users,setUsers] = useState<User[]>([]);

  // const fetchUserData = async()=> {
  //   const response = await fetch(usersUrl);
  //   const jsonData = await response.json();
  //   setUsers(jsonData);
  //   console.log(jsonData)
  // }

    // useEffect(()=>{
  //   fetchUserData();
  //   console.log(users);
  // },[])

  useEffect(()=>{
    axios.get(usersUrl)
    .then((response)=>{
      setUsers(response.data);
      console.log(`Axios data stringified: ${JSON.stringify(response.data)}`);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);



  //Rerender when users are updated
  useEffect(()=>{
    console.log('Users state updated:', users);
  },[users])



  const userTableInfo = users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {userTableInfo}
        </tbody>
      </table>
    </div>
  );
};

