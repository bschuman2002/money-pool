import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { UserGroupIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <nav className="flex h-16 sticky top-0 bg-white shadow-md items-center justify-between">
      <img className="-ml-14" src="/logo.svg" loading="lazy" />
      <div className="flex text-sm space-x-8 mr-8">
        <NavItem Icon={UserGroupIcon} title="Groups" selected />
        <NavItem Icon={UserCircleIcon} title="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
