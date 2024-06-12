import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// {/* <div className="flex justify-center">
// {/* <div className="">
//   <Header />
// </div> */}
// <div className="w-2/4 ">
// <TableContainer component={Paper}>
// <Table sx={{ minWidth: 650 }} aria-label="simple table">
//   <TableHead>
//     <TableRow>
//       <TableCell>User</TableCell>
//       <TableCell>Email</TableCell>
//       <TableCell>Phone</TableCell>
//     </TableRow>
//   </TableHead>
//   <TableBody>
//     {userTableInfo}
//   </TableBody>
// </Table>
// </TableContainer>
// </div>
// </div> */}


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
    <tr key={user.id}>
      <td className="text-md px-6 py-3"><Link to={`/todos/${user.id}`}>{user.name}</Link></td>
      <td className="text-md px-6 py-3">{user.email}</td>
      <td className="text-md px-6 py-3">{user.phone.replace(/[.'']/g, '-')}</td>
    </tr>
  ));

  return (
    <>
<main className="mx-auto">
  <Header/>
    <div className="relative w-2/4 flex flex-col shadow-2xl mb-6 rounded-b-xl">
    <div className="relative flex flex-col self-center">
      <table className="table-auto">
        <thead>
          <tr className="border border-solid border-l-0 border-r-0 border-t-0">
            <th className="text-md px-6 py-3">User</th>
            <th className="text-md px-6 py-3">Email</th>
            <th className="text-md px-6 py-3">Phone</th>
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





