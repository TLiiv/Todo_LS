import { UserTable } from '../Components/UserTable';


export interface HomePageProps {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  error: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ setError, error }) => {
  return (
    <div>
      <UserTable setError={setError} error={error} />
    </div>
  );
};

export default HomePage;
