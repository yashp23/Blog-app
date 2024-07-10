// src/components/TopBarLink.jsx

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    src: "/",
    text: "Home",
  },
  {
    src: "/News",
    text: "News",
  },
  {
    src: "/Video",
    text: "Video",
  },
  {
    src: "/Contact",
    text: "Contact",
  },
];

const TopBarLink = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-8">
      {navItems.map((item, index) => {
        return (
          <div
            className={`flex flex-col items-center cursor-pointer text-[#666666] hover:text-green-500 ${
              pathname === `${item.src}` ? "font-bold text-green-600" : ""
            }`}
          >
            <Link className="text-md" href={item.src}>
              {item.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TopBarLink;
