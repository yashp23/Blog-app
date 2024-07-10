// src/components/SearchBtn.jsx
import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="flex items-center">
      <Input
        type="text"
        placeholder="Search"
        className="bg-[#EDF3F8] md:w-28 lg:w-80 rounded-lg rounded-r-none border-none outline-none"
      />

      <SearchIcon className="h-10 w-10 bg-green-500 rounded-r-md p-2" />
    </div>
  );
};

export default SearchInput;
