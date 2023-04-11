import React, { ReactNode } from "react";
interface Props {
  title: String;
  subTitle: String;
  children: ReactNode;
}
const CourseFeatures: React.FC<Props> = ({
  title,
  subTitle,
  children,
}: Props) => {
  return (
    <ul className="flex flex-col items-center justify-center px-3 py-6 text-center shadow-md dark:bg-slate-600 bg-slate-200 rounded-3xl ">
      <li className="pb-2.5">{children}</li>
      <li className="pb-0.5 text-sm">{title}</li>
      <li className="text-[15px] font-bold">{subTitle}</li>
    </ul>
  );
};

export default CourseFeatures;
