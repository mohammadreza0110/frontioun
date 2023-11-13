import BaseButton from "@/components/BaseButton";
import Image from "next/image";
import { IoIosArrowDropleft } from "react-icons/io";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { FaSitemap } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { BsPersonVideo3, BsShieldFillCheck } from "react-icons/bs";
import CourseFeatures from "@/components/CourseFeatures";
import RatingStars from "@/components/RatingStars";
import CourseDropDown from "@/components/CourseDropDown";
import CommentSystem from "@/components/CommentSystem";

export default function ShowCourse() {
  const formattedNumber = (1000000).toLocaleString("fa-IR");

  const coursees = [
    {
      season: "بخش اول",
      name: "بخش اول",
      id: 1,
      lessons: [
        { title: "معرفی فلان چیز", duration: "03:52" },
        { title: "معرفی فلان چیز", duration: "03:52" },
        { title: "معرفی فلان چیز", duration: "03:52" },
      ],
    },
    {
      season: "بخش دوم",
      name: "بخش دوم",
      id: 2,
      lessons: [
        { title: "معرفی فلان چیز", duration: "03:52" },
        { title: "معرفی فلان چیز", duration: "03:52" },
        { title: "معرفی فلان چیز", duration: "03:52" },
      ],
    },
    {
      season: "بخش سوم",
      name: "بخش سوم",
      id: 3,
      lessons: [
        { title: "معرفی فلان چیز", duration: "03:52" },
        { title: "معرفی فلان چیز", duration: "03:52" },
        { title: "معرفی فلان چیز", duration: "03:52" },
      ],
    },
  ];

  return (
    <div className="container">
      <article className="px-6 py-3 my-8 border shadow-md dark:border-0 rounded-2xl dark:bg-slate-700 mt-28 lg:mt-10 xl:mb-8">
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

        <section className="flex flex-col-reverse xl:flex-row gap-x-2">
          <div className="flex flex-col justify-between xl:w-[60%]">
            <div>
              <h2 className="text-center xl:text-right py-4 xl:pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
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

            <div className="items-center justify-between mt-4 mb-2 xl:flex xl:mt-0 xl:mb-0">
              <BaseButton
                name="ثبت نام دوره"
                classes="w-full xl:w-auto bg-blue-700 rounded-2xl py-4 px-12 text-[18px] font-black"
              >
                <IoIosArrowDropleft size={23} />
              </BaseButton>
              <div className="flex justify-center xl:justify-end pt-4 items-end gap-x-1.5 text-slate-800 dark:text-slate-100 pl-2">
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

          <div className="w-full xl:w-[40%] h-full">
            <Image
              className="object-cover mr-auto border shadow-md dark:border-0 rounded-3xl"
              src="/images/javascript.jpg"
              alt="Js image"
              width={1200}
              height={700}
              priority
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

      <article className="grid grid-cols-1 xl:grid-cols-4 gap-y-8 xl:gap-8">
        <section className="col-span-3 px-4 py-6 border shadow-md md:px-8 dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h2 className="text-center xl:text-right pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
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

        <section className="px-3 pt-1 pb-4 border shadow-md xl:sticky xl:top-8 dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h3 className="py-3 font-bold text-center">
            اطلاعات دوره اینجاست :)
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2">
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

        <section className="col-span-3 px-4 py-6 border shadow-md md:px-8 dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h2 className="text-center xl:text-right pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
            گارانتی بازگشت وجه
          </h2>
          <div className="font-light xl:flex gap-x-4 dark:text-zinc-300 text-zinc-500">
            <div className="mb-4 center">
              <BsShieldFillCheck
                className="text-green-500 drop-shadow-2xl animate-pulse"
                size={80}
              />
            </div>

            <div>
              <p className="text-center xl:text-right">
                برای آنکه به شما اطمینان دهیم، که ما از محتوای دوره‌های خود ۱۰۰
                درصد مطمئن هستیم، برای این دوره گارانتی بازگشت وجه قرار داده‌ایم
                و این به این معنی است که اگر شما محتوای این دوره را به شکل کامل
                مشاهده کنید، اما نتیجه‌ای که به شما قول دادیم را دریافت نکنید
                ۱۰۰ درصد مبلغ پرداختی شما را برگشت خواهیم زد.
              </p>

              <BaseButton
                name="پولمو پس بده :("
                classes="w-full xl:w-auto hover:bg-red-700 hover:ring-0 ring ring-red-500 rounded-2xl py-2 px-12 text-[18px] !text-red-400 hover:!text-white font-black mt-4 "
                title="چشم :)"
              />
            </div>
          </div>
        </section>

        <section className="col-span-3 px-4 py-6 border shadow-md md:px-8 dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h2 className="text-center xl:text-right pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
            جلسات دوره
          </h2>

          <div className="grid grid-cols-1">
            <CourseDropDown courseDetails={coursees} />
          </div>
        </section>

        <section className="col-span-3 px-4 py-6 border shadow-md md:px-8 dark:border-0 dark:bg-slate-700 rounded-2xl">
          <h2 className="text-center xl:text-right pb-6 text-[24px] font-black dark:text-slate-100 text-slate-800">
            پرسش و بازخورد
          </h2>
          <CommentSystem />
        </section>
      </article>
    </div>
  );
}
