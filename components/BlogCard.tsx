import Image from "next/image";
import React from "react";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
interface Props {
  classes?: string;
}

export default function BlogCard({ classes }: Props) {
  return (
    <div
      className={`${classes} relative bg-white shadow-md dark:bg-slate-700 rounded-3xl`}
    >
      <div>
        <div className="w-full p-4 h-52">
          <a href="" className="w-full h-40">
            <Image
              src="/images/html.jpg"
              alt="Htmlimage"
              width={290}
              height={100}
              className="object-cover w-full h-full shadow-md rounded-3xl"
            />
          </a>
        </div>
      </div>

      <div className="px-5 mb-6">
        <header className="cursor-pointer mb-7 text-[17px] font-bold tracking-tight text-gray-800 dark:text-white hover:text-sky-800">
          چند نکته برای تبدیل شدن به یک برنامه نویس
        </header>

        <div className="flex justify-between mb-6">
          <div className="flex items-center gap-x-2">
            <div className="rounded-full w-7 ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                className="rounded-full"
                src="/images/me.jpg"
                alt="banner_image"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xs dark:text-slate-200">محمدرضا خورسند</h3>
          </div>

          <div className="px-2 py-1 text-[13px] font-medium rounded-lg dark:bg-slate-600 bg-slate-200 text-sky-600 dark:text-sky-500">
            توسعه وب
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <AiOutlineHeart
              className="cursor-pointer text-rose-500"
              size={24}
            />
            <AiOutlineComment
              className="text-green-500 cursor-pointer"
              size={24}
            />
          </div>

          <div className="text-[12px] font-medium text-sky-300">
            زمان مطالعه: 7 دقیقه
          </div>
        </div>
      </div>
    </div>
  );
}
