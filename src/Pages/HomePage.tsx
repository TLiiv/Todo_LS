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
