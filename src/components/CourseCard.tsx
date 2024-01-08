import React, { ReactNode, useState } from "react";
import Image, { ImageProps } from "next/image";
import { IoIosArrowDropleft } from "react-icons/io";
import BaseButton from "./BaseButton";
import Link from "next/link";

interface Props {
  price: number;
  image: ImageProps;
  title: string;
  children: ReactNode;
}

const CourseCard = ({ price, image, title, children }: Props) => {
  return (
    <div className="relative bg-white shadow-md dark:bg-slate-900 rounded-3xl">
      <div className="h-40">
        <div className="absolute w-full px-4 -top-16 xl:-top-10 h-60 xl:h-52">
          <a href="" className="w-full h-40">
            <Image
              {...image}
              className="object-cover w-full h-full shadow-md rounded-3xl"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="my-2 text-lg font-bold tracking-tight text-gray-800 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="pb-8 text-sm/5 font-normal text-justify text-zinc-500 dark:text-gray-400 min-h-[5rem]">
          {children}
        </div>
        <div className="flex items-center justify-between">
          <Link href={`courses/${title}`}>
            <BaseButton
              name="ثبت نام دوره"
              classes="bg-blue-700 rounded-2xl py-2.5 px-3 text-[13px] font-bold"
            >
              <IoIosArrowDropleft size={17} />
            </BaseButton>
          </Link>

          <div className="flex items-end gap-x-1.5 text-slate-800 dark:text-slate-100">
            <span className="text-lg font-bold">
              {price === 0 ? "رایـــگـــان :)" : price.toLocaleString()}
            </span>
            <div className="leading-[1]">
              {price !== 0 && (
                <div className="text-[9px] text-zinc-400 font-black pb-1.5">
                  <h6>تــــو</h6>
                  <h6>مان</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
