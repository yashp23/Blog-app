// src/components/TopBarLink.jsx
import { Home, NewspaperIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TopBarLink = () => {
  const pathname = usePathname();

  return (
    <div className="bg-green-500 p-2">
      <ul className="flex justify-between gap-2 md:gap-10">
        <li className="text-center md:text-left">
          <Link href="/" passHref>
            <div className={`flex items-center space-x-1 hover:font-bold ${pathname === "/" ? "font-bold" : ""}`}>
              <Home className="text-2xl md:hidden" />
              <h3 className="text-md lg:text-md hidden md:block ">Home</h3>
            </div>
          </Link>
        </li>
        <li className="text-center md:text-left">
          <Link href="/News" passHref>
            <div className={`flex items-center space-x-1 hover:font-bold ${pathname === "/News" ? "font-bold" : ""}`}>
              <NewspaperIcon className="text-2xl md:hidden" />
              <h3 className="text-md lg:text-md hidden md:block">News</h3>
            </div>
          </Link>
        </li>
        <li className="text-center md:text-left">
          <Link href="/Video" passHref>
            <div className={`flex items-center space-x-1 hover:font-bold ${pathname === "/Video" ? "font-bold" : ""}`}>
              <VideoIcon className="text-2xl md:hidden" />
              <h3 className="text-md lg:text-md hidden md:block">Video</h3>
            </div>
          </Link>
        </li>
        <li className="text-center md:text-left">
          <Link href="/Contact-Us" passHref>
            <div className={`flex items-center space-x-1 hover:font-bold ${pathname === "/Contact-Us" ? "font-bold" : ""}`}>
              <NewspaperIcon className="text-sm md:hidden" />
              <h3 className="text-md lg:text-md hidden md:block">Contact</h3>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBarLink;
