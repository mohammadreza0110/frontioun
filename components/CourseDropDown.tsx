import React, { useState } from "react";
import BaseButton from "./BaseButton";
import { RiTimerLine } from "react-icons/ri";
import { TfiArrowCircleLeft } from "react-icons/tfi";

interface Props {
  sectionSeason: string;
  sectionName: string;
  sectionLessons: any;
}

export default function CourseDropDown(props: Props) {
  const { sectionSeason, sectionName, sectionLessons } = props;
  const [activeDropDown, setActiveDropDown] = useState<boolean>(false);

  const handleActiveDropDown = () => {
    setActive((prev) => !prev);
    setActiveDropDown((prev) => !prev);
  };

  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`${
          active ? "translate-y-2" : ""
        } my-2 transition-transform duration-300 active rounded-xl bg-slate-200 dark:bg-slate-600`}
      >
        <div
          className="flex justify-between px-6 py-6 cursor-pointer"
          onClick={handleActiveDropDown}
        >
          <div className="inline-block">
            <h2 className="inline-block pl-3 border-l border-l-slate-400 min-w-max whitespace-nowrap">
              {sectionSeason}
            </h2>
            <h2 className="inline-block pr-3">{sectionName}</h2>
          </div>
          <div>
            <TfiArrowCircleLeft
              className={`${
                activeDropDown ? "-rotate-90" : "rotate-0"
              } transition-all`}
              size={23}
            />
          </div>
        </div>
        <ul
          className={`${
            activeDropDown ? "open" : "closed"
          } flex flex-col mr-auto overflow-hidden px-3 pb- md:px-6`}
        >
          {[...Array(5)].map((arr, index) => {
            return (
              <li className="flex items-center justify-between w-full px-6 py-4 my-2 border border-gray-400 dark:border-gray-500 dark:bg-gray-700 rounded-xl">
                <div className="flex items-center w-full text-xs gap-x-2 md:gap-x-4 md:text-base">
                  <h2 className="pl-2 text-sm border-l md:text-xl md:font-bold md:pl-4 border-l-slate-400 min-w-max whitespace-nowrap">
                    {index + 1}
                  </h2>
                  <h2 className="transition-colors cursor-pointer line-clamp-1 hover:text-blue-400">
                    {sectionLessons.title}
                  </h2>
                </div>

                <div className="flex justify-end w-full text-xs gap-x-4 md:text-base lg:justify-between">
                  <div className="flex items-center gap-x-1">
                    <h2>{sectionLessons.duration}</h2>
                    <RiTimerLine size={17} />
                  </div>
                  <div className="hidden md:block">
                    <BaseButton
                      name="مشاهده"
                      classes="bg-sky-800 rounded-lg py-2 !px-6 text-[13px] text-red-400 hover:text-white"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .open {
          max-height: 500px;
          transition: max-height 0.4s ease-out;
        }
        .closed {
          max-height: 0;
          transition: max-height 0.4s ease-in-out;
        }
      `}</style>
    </>
  );
}
