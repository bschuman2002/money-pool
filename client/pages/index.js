import { PlusIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import Group from "../components/Group";
import Navbar from "../components/Navbar";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Money Pool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Group List */}
      <div className="text-sm sm:text-base mx-16 md:mx-[20%] lg:mx-[25%] mt-10 bg-white flex flex-col shadow-md rounded-md p-10">
        <div className="flex flex-col space-y-6">
          {results.groups.map((group) => (
            <Group key={group?.groupId} name={group?.groupName} />
          ))}
        </div>

        {/* Add Group */}
        <Link href="/groups/new">
          <div className="mt-8 mr-[.875rem] h-14 w-14 ml-auto rounded-full hover:bg-gray-200 p-3 transform duration-100 hover:scale-125 active:bg-gray-400">
            <PlusIcon className="text-gray-700" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const groups = await fetch(
    "http://localhost:8000/user/bschuman2002/groups"
  ).then((res) => res.json());
  return {
    props: {
      results: groups,
    },
  };
}
