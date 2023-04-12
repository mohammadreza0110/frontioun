import BaseButton from "@/components/BaseButton";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { FaSitemap } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { BsPersonVideo3, BsShieldFillCheck } from "react-icons/bs";
import CourseFeatures from "@/components/CourseFeatures";
import RatingStars from "@/components/RatingStars";

export default function ShowCourse() {
  const [formattedNumber, setFormattedNumber] = useState<string>(
    (1000000).toLocaleString("fa-IR")
  );

  return (
    <div className="container">
      <article className="px-6 py-3 my-8 border shadow-md dark:border-0 rounded-2xl dark:bg-slate-700">
        <section className="flex items-center justify-between pb-3">
          <div className="flex items-baseline justify-end gap-x-1.5">
            <h3 className="text-xs font-">ضبطشم تکمیل شده</h3>
            <div className="text-4xl font-bold leading-none text-emerald-400 animate-pulse">
              .
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-1.5">
            <BiSupport size={20} />
            <h3 className="text-xs font-light">پشتیبانم داری </h3>
          </div>
        </section>

        <section className="flex gap-x-2">
          <div className="flex flex-col justify-between w-[60%]">
            <div>
              <h2 className="pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
                آموزش کامل جاوااسکریپت
              </h2>
              <p className="font-light dark:text-zinc-300 text-zinc-500 line-clamp-5">
                توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد
                میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون
                استفاده کنید مثل فریمورک‌های react و next توی این دوره شما راه و
                روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از
                کتابخونه‌ها و فریمورک‌های اون استفاده کنید مثل فریمورک‌های react
                و next توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو
                یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون
                استفاده کنید مثل فریمورک‌های react و next و next توی این دوره
                شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده
              </p>
            </div>

            <div className="flex items-center justify-between">
              <BaseButton
                name="ثبت نام دوره"
                classes="bg-blue-700 rounded-2xl py-4 px-12 text-[18px] font-black"
              >
                <IoIosArrowDropleft size={23} />
              </BaseButton>
              <div className="flex items-end gap-x-1.5 text-slate-800 dark:text-slate-100 pl-2">
                <span className="text-3xl font-extrabold">
                  {formattedNumber}
                </span>
                <div className="leading-[1]">
                  <div className="text-[12px] text-zinc-400 font-black pb-1.5">
                    <h6>تــــو</h6>
                    <h6>مان</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[40%] h-full">
            <Image
              className="object-cover mr-auto border shadow-md dark:border-0 rounded-3xl"
              src="/images/javascript.jpg"
              alt="Js image"
              width={500}
              height={700}
            />
          </div>
        </section>

        <hr className="my-4 border-t border-slate-300 dark:border-slate-500" />

        <section className="flex justify-between">
          <div className="flex gap-x-2">
            {/* <AiFillHeart className="text-red-500 cursor-pointer" size={25} /> */}
            <AiOutlineHeart className="text-red-500 cursor-pointer" size={28} />
            <AiOutlineComment
              className="text-green-500 cursor-pointer"
              size={28}
            />
          </div>

          <div>
            <div className="flex items-center gap-x-2 ">
              <h6 className="text-sm font-light">برا دوستاتم بفرست :)</h6>
              <RiTelegramLine
                title="اشتراک گزاری در تلگرام"
                className="transition-colors cursor-pointer dark:text-current text-zinc-500 dark:hover:text-zinc-300 hover:text-zinc-400"
                size={25}
              />

              <Image
                className="h-5 cursor-pointer min-w-max dark:invert invert-[30%] hover:invert-[50%] transition-all"
                title="اشتراک گزاری در بله"
                src="/images/bale.png"
                width={20}
                height={20}
                alt="Bale messenger icon"
              />
            </div>
          </div>
        </section>
      </article>

      <article className="grid grid-cols-4 gap-8">
        <section className="col-span-3 px-8 py-6 border shadow-md dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h2 className="pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
            توضیحات
          </h2>
          <p className="font-light dark:text-zinc-300 text-zinc-500">
            توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و
            آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید مثل
            فریمورک‌های react و next توی این دوره شما راه و روش برنامه نویسی
            جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و
            فریمورک‌های اون استفاده کنید مثل فریمورک‌های react و next توی این
            دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده
            میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید مثل
            فریمورک‌های react و next توی این دوره شما راه و روش برنامه نویسی
            جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و
            فریمورک‌های اون استفاده کنید مثل فریمورک‌های react و next توی این
            دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده
            میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید مثل
            فریمورک‌های react و next
          </p>
        </section>

        <section className="sticky top-0 px-3 pt-1 pb-4 border shadow-md dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h3 className="py-3 font-bold text-center">
            اطلاعات دوره اینجاست :)
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <CourseFeatures title="تعداد جلسات :" subTitle="30">
              <FaSitemap size={25} />
            </CourseFeatures>

            <CourseFeatures title="آخرین آپدیت :" subTitle="1402/03/07">
              <RxUpdate size={25} />
            </CourseFeatures>

            <CourseFeatures title="مدت دوره:" subTitle="25:45:00">
              <BsClockHistory size={25} />
            </CourseFeatures>

            <CourseFeatures title="تعداد دانشجو:" subTitle="1000 نفر">
              <BsPersonVideo3 size={25} />
            </CourseFeatures>
          </div>
          <div className="p-2 mt-4 shadow-lg dark:bg-slate-600 bg-slate-200 rounded-2xl center">
            <div className="flex flex-col items-center gap-y-1">
              <div>اگه دوره رو دیدی رای بده</div>
              <RatingStars />
            </div>
          </div>
        </section>

        <section className="col-span-3 px-8 py-6 border shadow-md dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h2 className="pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
            گارانتی بازگشت وجه
          </h2>
          <div className="flex font-light gap-x-4 dark:text-zinc-300 text-zinc-500">
            <div>
              <BsShieldFillCheck
                className="text-green-500 drop-shadow-2xl animate-pulse"
                size={80}
              />
            </div>

            <div>
              <p>
                برای آنکه به شما اطمینان دهیم، که ما از محتوای دوره‌های خود ۱۰۰
                درصد مطمئن هستیم، برای این دوره گارانتی بازگشت وجه قرار داده‌ایم
                و این به این معنی است که اگر شما محتوای این دوره را به شکل کامل
                مشاهده کنید، اما نتیجه‌ای که به شما قول دادیم را دریافت نکنید
                ۱۰۰ درصد مبلغ پرداختی شما را برگشت خواهیم زد.
              </p>

              <BaseButton
                name="پولمو پس بده :("
                classes="hover:bg-red-700 hover:ring-0 ring ring-red-500 rounded-2xl py-2 px-12 text-[18px] text-red-400 hover:text-white font-black mt-4 "
                title="چشم :)"
              >
                {/* <IoIosArrowDropleft size={23} /> */}
              </BaseButton>
            </div>
          </div>
        </section>

        <section className="col-span-3 px-8 py-6 border shadow-md dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h2 className="pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
            جلسات دوره
          </h2>
          <p className="font-light dark:text-zinc-300 text-zinc-500"></p>
        </section>

        <section className="col-span-3 px-8 py-6 border shadow-md dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h2 className="pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
            پرسش و بازخورد
          </h2>
          <p className="font-light dark:text-zinc-300 text-zinc-500"></p>
        </section>
      </article>
    </div>
  );
}
