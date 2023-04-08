import Link from "next/link";
import React from "react";

interface Props {
  classes: string;
}
const FrontiounLogo: React.FC<Props> = ({ classes }) => {
  return (
    <div
      className={`${classes} font-extrabold whitespace-nowrap logo__gradient drop-shadow lg:m-0`}
    >
      <Link href={"/"}>
        <span className="text-sm lg:text-base">{"</ "}</span>
        <span className="px-1 lg:inline-block max-w-max">فرانتیــون</span>
        <span className="text-sm lg:text-base">{">"}</span>
      </Link>
    </div>
  );
};
export default FrontiounLogo;
