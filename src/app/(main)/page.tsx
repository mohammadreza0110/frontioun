import Image from "next/image";
import BaseButton from "@/components/BaseButton";
import WaveArrow from "@/components/svgs/WaveArrow";
import CourseCard from "@/components/CourseCard";
import GarrantyCard from "@/components/CommitmentCard";
import { SlDiamond } from "react-icons/sl";
import { SiReactos } from "react-icons/si";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { GiMoneyStack } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export default function Home() {
  const courseCards = [
    {
      title: "دوره ریکت",
      id: 1,
      price: 1500000,
      description:
        " توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید",
      image: {
        src: "/images/react.jpg",
        alt: "react image",
        width: 290,
        height: 100,
      },
    },
    {
      title: "دوره اچ تی ام ال",
      id: 2,
      price: 0,
      description:
        " توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید",
      image: {
        src: "/images/html.jpg",
        alt: "Htmlimage",
        width: 290,
        height: 100,
      },
    },
    {
      title: "دوره سی اس اس",
      id: 3,
      price: 300000,
      description:
        " توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید",
      image: {
        src: "/images/css.avif",
        alt: "Css image",
        width: 290,
        height: 100,
      },
    },
    {
      title: "دوره جاوااسکریپت",
      id: 4,
      price: 1000000,
      description:
        " توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید",
      image: {
        src: "/images/javascript.jpg",
        alt: "Js image",
        width: 500,
        height: 200,
      },
    },
  ];

  const garrantyCards = [
    {
      title: "دوره‌های متنوع",
      icon: <SiReactos className="mb-4 text-blue-500" size={35} />,
    },
    {
      title: "تضمین کیفیت",
      icon: <SlDiamond className="mb-4 text-blue-500" size={35} />,
    },
    {
      title: "کاربردی و موثر",
      icon: (
        <HiOutlineWrenchScrewdriver className="mb-4 text-blue-500" size={35} />
      ),
    },
    {
      title: "تضمین بازگشت وجه",
      icon: <GiMoneyStack className="mb-4 text-blue-500" size={45} />,
    },
    {
      title: "همراه با پشتیبانی",
      icon: <BiSupport className="mb-4 text-blue-500" size={40} />,
    },
  ];

  return (
    <main className="container pt-32 mx-auto lg:pt-0">
      <section className="relative flex flex-col-reverse py-8 m-auto xl:flex-row xl:w-10/12">
        <div className="text-center xl:text-right">
          <h1 className="hero_text text-[50px] leading-[1.5] md:leading-[1.3] xl:text-[65px] text-primary-dark dark:text-primary-light">
            فرانت شروع برنامه‌نویسی ست!
          </h1>

          <p className="py-3 border-b-2 md:w-10/12 md:text-lg md:m-auto xl:m-0 border-zinc-200 dark:border-slate-700 text-slate-700 dark:text-primary-light">
            عمیق یاد می‌گیری چون عمیق بودن رسالت ماست
          </p>

          <BaseButton
            name="بریم تو کارش!"
            classes="mt-6 py-4 text-lg text-white bg-blue-700 rounded-full w-1/2 mx-auto xl:mx-0 xl:w-5/12 hover:bg-blue-600"
          />
        </div>

        <div className="relative xl:w-7/12">
          <Image
            className="w-48 m-auto lg:w-[315px]"
            src="/images/banner.png"
            alt="banner_image"
            width={290}
            height={100}
            priority
          />
          <div
            id="banner-shadow"
            className="absolute z-10 w-full h-32 hero-shadow-gradient dark:hero-shadow-gradient-dark -bottom-[9px] blur-sm rounded-[19px] left-0 md:right-0 md:translate-x-0"
          />
        </div>
      </section>

      <WaveArrow />

      <section className="px-4 pb-16 pt-7">
        <ul className="flex flex-col items-center justify-center gap-16 font-bold lg:flex-row text-md whitespace-nowrap text-slate-800">
          {garrantyCards.map((card) => (
            <GarrantyCard title={card.title} key={card.title}>
              {card.icon}
            </GarrantyCard>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-center justify-between pb-16">
          <h2 className="text-xl font-black md:text-3xl text-slate-800 dark:text-slate-100">
            جدیدترین دوره‌ها
          </h2>
          <div className="text-sm font-semibold cursor-pointer center-center gap-x-2 text-zinc-500 hover:text-zinc-800 dark:text-slate-100 dark:hover:text-slate-300">
            <span>مشاهده همه دوره‌ها</span>
            <IoIosArrowBack size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-20">
          {courseCards.map((course, index) => {
            return (
              <CourseCard
                image={course.image}
                title={course.title}
                price={course.price}
                key={course.id}
              >
                <p className="line-clamp-3">{course.description}</p>
              </CourseCard>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col px-2 py-12 mt-10 mb-20 lg:px-10 gap-y-8 lg:flex-row gap-x-8 lg:mt-60 rounded-xl">
        <div className="lg:w-5/12">
          <header className="pb-4 text-3xl font-black">
            از گوشه و کنار دنیای برنامه نویسی
          </header>
          <p className="font-thin dark:text-slate-300">
            نوشتن، یکی از فعالیت‌های جذاب و البته کاربردی در زندگی است. این
            فعالیت از ابتدای خلقت همراه انسان بوده و به او کمک کرده تا به روز
            باشه. ما، فضایی با نام «بلاگتیون» آماده کرده‌ایم که شما می‌توانید در
            آن، ایده‌ها و مطالب جذاب و کاربردی در حوزه برنامه‌نویسی را با هزاران
            برنامه‌نویس علاقه‌مند به این حوزه به اشتراک بگذارید.
          </p>
          <Link href={"/blogs"}>
            <BaseButton
              name="همه بلاگ‌ها"
              classes="mt-6 py-3 text-lg text-white bg-blue-700 rounded-full w-full xl:w-5/12 hover:bg-blue-600"
            />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 lg:w-7/12 gap-y-10 gap-x-8">
          <div className="flex flex-col lg:-translate-y-40 gap-y-10">
            <BlogCard />
            <BlogCard />
          </div>
          <div className="flex flex-col gap-y-10">
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>

      <section className="relative hidden xl:flex items-center justify-center h-32 m-auto text-xl font-bold gap-x-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
        <Image
          className="absolute -right-5 -bottom-10"
          src="/images/mobile_messanger.png"
          alt="mobileMessengerImage"
          width={290}
          height={290}
        />
        <span className="mr-40 text-white">
          ما هر روز کلی مطالب آموزشی جالب در شبکه‌های مجازی منتشر می‌کنیم!
        </span>
        <BaseButton
          name="مشاهده شبکه‌های مجازی"
          classes="py-4 w-[250px] text-base !text-blue-600 bg-white rounded-full hover:bg-transparent hover:ring transition duration-200 hover:ring-white hover:!text-white"
        />
      </section>
    </main>
  );
}
