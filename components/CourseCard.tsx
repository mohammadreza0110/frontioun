import React, { ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import { IoIosArrowDropleft } from "react-icons/io";
import BaseButton from "./BaseButton";

interface Props {
  price: number;
  image: ImageProps;
  title: string;
  children: ReactNode;
}

const CourseCard: React.FC<Props> = ({ price, image, title, children }) => {
  const formattedNumber = price.toLocaleString();
  return (
    <div className="relative bg-white border border-gray-200 shadow-xl glass-container rounded-3xl dark:bg-gray-800 dark:border-gray-700">
      <div className="h-40">
        <div className="absolute w-full px-4 -top-10 h-52">
          <a href="" className="w-full h-40 shadow-2xl">
            <Image
              className="object-cover w-full h-full shadow-xl rounded-3xl"
              {...image}
            />
          </a>
        </div>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="pb-8 text-xs font-normal text-zinc-700 dark:text-gray-400 min-h-[5rem]">
          {children}
        </p>
        <div className="flex items-center justify-between">
          <BaseButton
            classes="bg-blue-700 rounded-xl py-2 px-2.5 text-[13px] font-bold"
            title="ثبت نام دوره"
          >
            <IoIosArrowDropleft size={17} />
          </BaseButton>

          <div className="flex items-end gap-x-1.5">
            <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {formattedNumber}
            </span>
            <div className="leading-1">
              <p className="text-[9px] font-thin leading-3 pb-1.5">
                <h6>تــــو</h6>
                <h6>مان</h6>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
