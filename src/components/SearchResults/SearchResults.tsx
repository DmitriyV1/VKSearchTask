import { UserCard } from "../UserCard/UserCard";
import "./style.css";

interface IResult {
  limit: number;
  skip: number;
  total: number;
  users: object[];
}

interface IProps {
  searchResult: IResult;
  error: string;
  isLoading: boolean;
}

export function SearchResults(props: IProps) {
  const { searchResult, error, isLoading } = { ...props };

  return (
    <div className="usersList">
      {error && <div>Error with loading data. Please try again.</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        searchResult?.users &&
        searchResult.users.map((user) => <UserCard user={user} key={user.id} />)
      )}
    </div>
  );
}
