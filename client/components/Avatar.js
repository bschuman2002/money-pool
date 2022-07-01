import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex pr-3 items-center border-r-[1px] border-gray-300 h-[50px] w-[50px]">
      <Image
        src="https://media-exp2.licdn.com/dms/image/C4E03AQGO8BrpPQ26VQ/profile-displayphoto-shrink_400_400/0/1643231455293?e=1661990400&v=beta&t=aIgOIAuhizT74v4gP202ESw5ZeHFGglrl1ifLkHtVak"
        height={50}
        width={50}
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
