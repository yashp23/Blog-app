// src/components/ButtonAndTheme.jsx
import React from "react";
import { assets } from "@/Assets/assets";
import ThemeToggleBtn from "./ThemeToggleButton";
import { Button } from "./ui/button";
import Image from "next/image";
import { PlusIcon } from "lucide-react";

const ButtonAndTheme = () => {
  return (
    <div className=" hidden md:flex md:flex-row items-center justify-center md:justify-between space-y-2 md:space-y-0 md:space-x-2">
      <Button className="rounded-sm border-3 border-solid border-white flex items-center text-md" >
        
        <PlusIcon
          src={assets.arrow}
          alt="arrow"
          varient={'secondary'}
          className=" sm:w-auto  ml-2 "
        />Create
      </Button>
      <ThemeToggleBtn />
    </div>
  );
};

export default ButtonAndTheme;
