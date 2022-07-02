import React from "react";
import Avatar from "./Avatar";
import { PencilIcon } from "@heroicons/react/solid";

const Group = ({ name }) => {
  return (
    <div className="p-3 flex items-center rounded-md cursor-pointer border border-gray-300 text-gray-700 active:border-gray-700 transition duration-150 hover:scale-105">
      <Avatar />
      <p className="ml-3">{name}</p>
      <div className="ml-auto my-2 mr-2 p-3 rounded-full hover:bg-gray-200 transition duration-100 hover:scale-150 active:bg-gray-400">
        <PencilIcon className="h-5 text-gray-700" />
      </div>
    </div>
  );
};

export default Group;
