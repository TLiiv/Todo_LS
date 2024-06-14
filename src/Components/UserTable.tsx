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
  
  const smallScreenCard = users.map((user) => (
    <Link to={`/todos/${user.id}`}>
          <div key={user.id} className="border border-background p-4 rounded-lg mb-4 shadow-md w-full hover:bg-background">
            <div className="text-lg text-primary mb-2 "><strong>User:</strong> {user.name}</div>
            <div className="text-lg text-primary mb-2 "><strong>Email:</strong> {user.email}</div>
            <div className="text-lg text-primary "><strong>Phone:</strong> {user.phone}</div>
      </div>
      </Link>
        ))

  return (
    <>
      <Header />
      
      <main className="w-full max-w-7xl px-6  shadow-xl mb-6 rounded-xl mx-auto bg-transparent">
    <div className="relative w-full flex flex-col">
    <div className="relative flex flex-col self-center ">
      <table className="table-auto mx-auto hidden md:table">
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
            <div className="flex flex-col w-full  md:hidden">
              {smallScreenCard }
      </div>
            
            
      </div>

    </div>
    </main>
    
    
    </>
  );
};





