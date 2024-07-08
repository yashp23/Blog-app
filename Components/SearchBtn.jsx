// src/components/SearchBtn.jsx
import React from 'react';
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className='flex items-center'>
      <Input
        type="text"
        placeholder="Search"
        className='bg-[#EDF3F8] w-40 md:w-50 rounded-lg rounded-r-none border-none'
      />
      <SearchIcon className='h-10 w-10 bg-red-500 rounded-r-md p-2' />
    </div>
  );
};

export default SearchInput;
