import React from "react";

const NavItem = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex flex-col group items-center py-[.95rem] sm:py-1 hover:border-b-4 hover:border-green-400 ${
        selected && "border-b-4 border-green-400"
      }`}
    >
      <Icon className="h-8" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default NavItem;
