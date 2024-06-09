import * as React from 'react';
import { Hero } from '../Components/Hero';
import { UserTable } from '../Components/UserTable';


export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div>
        <UserTable />
    </div>
  );
}
