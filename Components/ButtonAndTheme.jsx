// src/components/ButtonAndTheme.jsx
import React from "react";
import { assets } from "@/Assets/assets";
import ThemeToggleBtn from "./ThemeToggleButton";
import { Button } from "./ui/button";
import Image from "next/image";

const ButtonAndTheme = () => {
  return (
    <div className=" hidden md:flex md:flex-row items-center justify-center md:justify-between space-y-2 md:space-y-0 md:space-x-2">
      <Button className="rounded-sm border-3 border-solid border-white font-bold text-md py-2 md:py-3 px-5 md:px-8 flex items-center">
        Get Started
        <Image
          src={assets.arrow}
          alt="arrow"
          className="w-4 h-4 md:w-4 sm:w-auto filter invert ml-2 md:ml-3"
        />
      </Button>
      <ThemeToggleBtn />
    </div>
  );
};

export default ButtonAndTheme;
