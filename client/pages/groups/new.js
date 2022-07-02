import { useState } from "react";
import Navbar from "../../components/Navbar";
import { ChevronLeftIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";

const NewGroup = () => {
  const [groupName, setGroupName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />

      <div className="bg-white mx-[20%] mt-10 rounded-md shadow-md p-8">
        <Link href="/">
          <div className="flex items-center mb-5 text-sm group cursor-pointer">
            <ChevronLeftIcon className="h-7 text-gray-700" />
            <p className="group-hover:underline hidden sm:inline-flex">Back</p>
          </div>
        </Link>
        <form className="flex flex-col space-y-6 text-sm items-center">
          <div className="flex p-4 w-full border border-gray-300 rounded-lg hover:shadow-lg focus-within:shadow-lg">
            <input
              type="text"
              value={groupName || ""}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full outline-none"
              placeholder="Group Name"
            />
            <XIcon
              className="cursor-pointer h-6 ml-auto mr-1 transform duration-100 hover:scale-125 text-gray-700"
              onClick={() => setGroupName("")}
            />
          </div>
          <div className="w-[7.5rem] bg-gray-300 rounded-md p-3 text-center text-gray-700 hover:ring-1 ring-gray-400 cursor-pointer active:ring-gray-600">
            <button
              onClick={handleFormSubmit}
              className="w-full cursor-pointer"
            >
              Add Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewGroup;
