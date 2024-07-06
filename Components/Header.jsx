import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="px-10 py-5 md:px-20 lg:px-25 bg-orange-400">
      <div className="flex justify-between items-center p-2 md:px-10 bg-slate-500">
        <Image
          src={assets.logo}
          width={150}
          alt="logo"
          className="w-[100] sm:w-auto"
        />
        <Button
          className={
            "rounded-sm gap-2 border-t-[2.9px] border-l-[2.9px] border-solid border-white font-bold text-md py-5 "
          }
        >
          Get Start{" "}
          <Image
            src={assets.arrow}
            width={160}
            alt="logo"
            className="w-7 h-4 md:w-6 sm:w-auto filter invert"
          />
        </Button>
      </div>
    </div>
  );
};

export default Header;
