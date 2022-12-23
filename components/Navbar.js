import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { fetchGroups } from "../services/users";

const Navbar = () => {
  const { data: session } = useSession();
  const [hidePopout, setHidePopout] = useState(true);

  useEffect(() => {
    const docs = fetchGroups("3mWD7mgipOOuXBOJhv7J");
    docs.then((data) => {
      data.forEach((doc) => console.log(doc.data()));
    });
  }, []);

  return (
    <>
      <div className="flex bg-white h-12 shadow-md items-center sticky top-0">
        {session?.user?.image && (
          <>
            <div
              className={`ml-auto mr-5 rounded-full select-none cursor-pointer ${
                !hidePopout && "ring-4 ring-gray-300"
              }`}
              onClick={() => setHidePopout(!hidePopout)}
            >
              <Image
                width={35}
                height={35}
                className="rounded-full"
                src={session.user.image}
              />
            </div>
            {/* Popout user profile */}
            <div
              className={`flex flex-col absolute p-2 top-14 right-5 bg-white shadow-lg rounded-md w-56 border border-gray-200 ${
                hidePopout && "hidden"
              }`}
            >
              <div className="flex flex-col p-2 border-b-2 border-gray-600">
                <p className="text-gray-800">{session?.user?.name}</p>
                <p className="text-sm text-gray-600">{session?.user?.email}</p>
              </div>
              <div className="flex ml-auto mr-2 py-1 items-center group">
                <button className="mr-1" onClick={signOut}>
                  Sign Out
                </button>
                <ArrowRightOnRectangleIcon className="h-5 -translate-x-10 opacity-0 text-gray-800 transition duration-150 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </div>
          </>
        )}
        {!session?.user && (
          <button
            className="ml-auto mr-5 cursor-pointer hover:text-gray-700 active:text-gray-600"
            onClick={signIn}
          >
            Sign In
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
