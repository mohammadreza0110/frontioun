import React from "react";
import Image from "next/image";
import { RiLoginCircleLine } from "react-icons/ri";

interface Props {
  isLoggedIn: boolean;
}
const Avatar: React.FC<Props> = ({ isLoggedIn }: Props) => {
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
        <div className="pl-1 flex items-end text-base gap-x-1.5 text-slate-800 dark:text-slate-100">
          <RiLoginCircleLine size={23} />
          <span>ورود</span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
