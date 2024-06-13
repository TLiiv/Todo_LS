import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";



interface Props {

}

 type User = {
  id: string;
  name: string;
  email:string;
  phone:string;
}

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const UserTable: React.FC<Props> = (props: Props) => {

  const [users,setUsers] = useState<User[]>([]);

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
    <tr key={user.id} className="border border-background border-solid border-l-0 border-r-0 border-t-0 " >
      <td className="text-xl px-6 py-3 text-primary hover:text-hover"><Link to={`/todos/${user.id}`}>{user.name}</Link></td>
      <td className="text-xl px-6 py-3 text-primary">{user.email}</td>
      <td className="text-xl px-6 py-3 text-primary">{user.phone.replace(/[.'']/g, '-')}</td>
    </tr>
  ));

  return (
    <>
      <Header />
      
      <main className="w-full max-w-7xl px-6  shadow-xl mb-6 rounded-xl mx-auto bg-transparent">
    <div className="relative w-full flex flex-col ">
    <div className="relative flex flex-col self-center ">
      <table className="table-auto mx-auto">
        <thead>
          <tr className="border border-grey-600 border-solid border-l-0 border-r-0 border-t-0">
            <th className="text-2xl px-6 py-3 text-secondary">User</th>
            <th className="text-2xl px-6 py-3 text-secondary">Email</th>
            <th className="text-2xl px-6 py-3 text-secondary">Phone</th>
          </tr>
        </thead>
        <tbody>
          {userTableInfo}
        </tbody>
      </table>
      </div>

    </div>
    </main>
    
    
    </>
  );
};





