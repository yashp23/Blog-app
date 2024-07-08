// src/components/Header.jsx
"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

import TopBarLink from "./TopBarLink";
import ButtonAndTheme from "./ButtonAndTheme";
import SearchInput from "./SearchBtn";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center px-5 py-3 md:px-20 lg:px-25 bg-orange-400 space-x-10">
        <div className="p-2 md:p-0 bg-slate-500">
          <Image
            src={assets.logo}
            height={50}
            alt="logo"
            className="w-20 md:w-36"
          />
        </div>
        <div className=" flex justify-between items-center md:space-x-10">
          <div className="hidden md:flex flex-1 gap-5 justify-between items-center">
            <TopBarLink />
            <SearchInput />
          </div>
          <ButtonAndTheme />
        </div>
      </div>
    </div>
  );
};

export default Header;
