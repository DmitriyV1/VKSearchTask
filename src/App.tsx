import { useEffect, useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchResults } from "./components/SearchResults/SearchResults";

interface IResult {
  limit: number;
  skip: number;
  total: number;
  users: [];
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>();
  const [searchResult, setSearchResult] = useState<IResult>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery == undefined || searchQuery == "")
      return setSearchResult(undefined);

    const getUser = async () => {
      try {
        setIsLoading(true);
        await fetch(`https://dummyjson.com/users/search?q=${searchQuery}`)
          .then((resp) => resp.json())
          .then((data) => setSearchResult(data));
      } catch (error) {
        error && setError(String(error));
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, [searchQuery]);

  return (
    <>
      <SearchForm setSearchQuery={setSearchQuery} />
      <SearchResults
        searchResult={searchResult}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
}
