import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="space-y-4 px-4">
      <h1 className="text-2xl font-bold">Search for your ideal job</h1>

      <div className="relative max-w-[500px]">
        <SearchIcon className="text-muted-foreground absolute top-3 left-3" />
        <Input type="search" className="pl-11" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Search;
