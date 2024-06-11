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
    <TableRow key={user.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell ><Link to={`/todos/${user.id}`}>{user.name}</Link></TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone.replace(/[.'']/g, '-')}</TableCell>
    </TableRow>
  ));

  return (
    <>
    <div className="flex justify-center">
      {/* <div className="">
        <Header />
    </div> */}
    <div className="w-2/4 ">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userTableInfo}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </>
  );
};

