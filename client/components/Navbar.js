import React from "react";
import NavItem from "./NavItem";
import { UserGroupIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex h-16 sticky top-0 z-[1] bg-white shadow-md items-center justify-between">
      <Link href="/">
        <p className="ml-8 text-xl font-bold cursor-pointer">Money Pool</p>
      </Link>
      <div className="flex text-sm space-x-8 mr-8">
        <NavItem Icon={UserGroupIcon} title="Groups" selected />
        <NavItem Icon={UserCircleIcon} title="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
