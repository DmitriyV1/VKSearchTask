import { ChangeEvent } from "react";
import "./styles.css";

export function SearchForm({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="searchForm">
      <form>
        <input type="text" placeholder="Search..." onChange={handleInput} />
      </form>
    </div>
  );
}
