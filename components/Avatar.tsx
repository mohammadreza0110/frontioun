import React from "react";
import Image from "next/image";
import { RiLoginCircleLine } from "react-icons/ri";

export default function Avatar() {
  const isLoggedIn = false;
  return (
    <div className="cursor-pointer avatar">
      {isLoggedIn ? (
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Image
            className="rounded-full"
            src="/images/me.jpg"
            alt="banner_image"
            width={50}
            height={50}
          />
        </div>
      ) : (
        <div className="pl-1 flex items-end text-base gap-x-1.5">
          <RiLoginCircleLine size={23} />
          <span>ورود</span>
        </div>
      )}
    </div>
  );
}
