// src/components/Header.jsx
"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import TopBarLink from "./TopBarLink";
import ButtonAndTheme from "./ButtonAndTheme";
import SearchInput from "./SearchBtn";
import UserProfileAvatar from "./UserProfileAvatar";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed w-full bg-white dark:bg-[#161717] z-50 shadow-md dark:shadow-xl">
      <div className="flex items-center max-w-6xl justify-between h-20 mx-auto px-3 p-2">
        <div className="flex items-center gap-2">
          <Image
            src={theme === "light" ? assets.logo : assets.logo_light}
            width={100}
            height={80}
            alt="logo"
          />
          <div className="md:block hidden mx-4">
            <SearchInput />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className=" md:block hidden">
            <TopBarLink />
          </div>
          <div>
            {/* Uncomment and update the following lines based on your authentication setup */}
            {/* <SignedOut>
              <Button className='rounded-full' variant={'secondary'}>
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          </div>
          <div className="hidden md:flex flex-1 gap-6 justify-between items-center">
            <UserProfileAvatar name={"yash"} />
            <ButtonAndTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
