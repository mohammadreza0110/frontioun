"use client";

import React, { useState } from "react";
import { RiTimerLine } from "react-icons/ri";
import BaseButton from "./BaseButton";
import { TfiArrowCircleLeft } from "react-icons/tfi";
interface Props {
  courseDetails: {
    season: string;
    name: string;
    id: number;
    lessons: { title: string; duration: string }[];
  }[];
}

export default function SampleAccordion({ courseDetails }: Props) {
  const [selected, setSelected] = useState<any>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      {courseDetails.map((course, i) => {
        return (
          <div
            key={course.id}
            className={`my-2 transition-transform active rounded-xl bg-slate-200 dark:bg-slate-600`}
          >
            <div
              className="flex justify-between px-6 py-6 cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div className="inline-block">
                <h2 className="inline-block pl-3 border-l border-l-slate-400 min-w-max whitespace-nowrap">
                  {course.season}
                </h2>
                <h2 className="inline-block pr-3">{course.name}</h2>
              </div>
              <div>
                <TfiArrowCircleLeft
                  className={`${
                    selected === i ? "-rotate-90" : "rotate-0"
                  } transition-all`}
                  size={23}
                />
              </div>
            </div>
            <ul
              className={`${
                selected === i ? "open" : "closed"
              } flex flex-col mr-auto overflow-hidden px-3 md:px-6`}
            >
              {course.lessons.map((lesson, index) => {
                return (
                  <li
                    key={lesson.title}
                    className="flex items-center justify-between w-full px-6 py-4 my-2 border border-gray-400 dark:border-gray-500 dark:bg-gray-700 rounded-xl"
                  >
                    <div className="flex items-center w-full text-xs gap-x-2 md:gap-x-4 md:text-base">
                      <h2 className="pl-2 text-sm border-l md:text-xl md:font-bold md:pl-4 border-l-slate-400 min-w-max whitespace-nowrap">
                        {index + 1}
                      </h2>
                      <h2 className="transition-colors cursor-pointer line-clamp-1 hover:text-blue-400">
                        {lesson.title}
                      </h2>
                    </div>

                    <div className="flex justify-end w-full text-xs gap-x-4 md:text-base lg:justify-between">
                      <div className="flex items-center gap-x-1">
                        <h2>{lesson.duration}</h2>
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
        );
      })}

      <style jsx>{`
        .open {
          max-height: 500px;
          transition: max-height 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035);
        }
        .closed {
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }
      `}</style>
    </>
  );
}
