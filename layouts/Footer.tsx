import React from "react";
import Link from "next/link";
import FrontiounLogo from "@/components/FrontiounLogo";
import Image from "next/image";
import { RiTelegramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="relative pt-10 mt-20 border-t lg:border-t-0 dark:border-t-slate-500">
      <section className="container">
        <div className="flex flex-col items-center justify-between pb-6 lg:flex-row">
          <FrontiounLogo classes="text-4xl" />
          <div className="lg:w-[65%] xl:w-[72%] hidden lg:block border border-t mt-3 border-zinc-200 dark:border-slate-600" />
          <div className="flex items-center pt-2">
            <div
              title="کانال تلگرام"
              className="p-2 transition-colors rounded-full cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-500"
            >
              <RiTelegramLine size={28} />
            </div>
            <div
              title="کانال بله"
              className="p-[11px] transition-colors rounded-full cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-500"
            >
              <Image
                className="dark:invert"
                src="/images/bale.png"
                width={23}
                height={22}
                alt="Bale messenger icon"
              />
            </div>
            <div
              title="حساب لینکدین"
              className="p-2 transition-colors rounded-full cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-500"
            >
              <CiLinkedin size={28} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 text-center lg:text-right lg:grid-cols-3 justify-items-center gap-y-10 gap-x-24">
          <div>
            <h2 className="pb-4 text-lg font-bold">درباره فرانتیون</h2>
            <p className="text-sm leading-7 text-zinc-400">
              فرانتیون در سال 1402 با هدف ارائه آموزش‌های با کیفیت و کاربردی و
              عمیق متولد شد امیدواریم با تکیه بر خداوند قله‌های نوین علم و دانش
              رو فتح کنیم و رسالتمون رو روز به روز قوی‌تر کنیم
            </p>
          </div>

          <div>
            <h2 className="pb-3 text-lg font-bold">بخش‌های سایت</h2>
            <ul className="text-sm leading-10 text-zinc-400">
              <li>
                <Link href={"/courses"}>دوره‌های آموزشی</Link>
              </li>
              <li>
                <Link href={"/blogs"}>بلاگ‌های آموزشی</Link>
              </li>
              <li>
                <Link href={"/about_us"}> درباره‌ما</Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h2 className="pb-3 text-lg font-bold">ارتباط باما</h2>
            <ul className="text-sm leading-10 text-zinc-400">
              <li className="flex justify-between">
                <div className="center-center gap-x-1.5">
                  <RiMailSendLine size={20} />
                  <div>ایمیل :</div>
                </div>
                <div>info@frontioun.ir</div>
              </li>
              <li className="flex justify-between">
                <div className="center-center gap-x-1.5">
                  <RiTelegramLine size={25} />
                  <div>آیدی تلگرام :</div>
                </div>
                <div>frontioun_support@</div>
              </li>
              <li className="flex justify-between">
                <div className="center-center gap-x-1.5">
                  <div>
                    <Image
                      className="grayscale-[80%] invert-[60%]"
                      src="/images/bale.png"
                      width={21}
                      height={21}
                      alt="Bale messenger icon"
                    />
                  </div>
                  <div>آیدی بله :</div>
                </div>
                <div>frontioun_support@</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-10 text-sm text-center dark:text-slate-200 text-zinc-400">&copy; کلیه حقوق مادی و معنوی محصولات و محتوای سایت برای فرانتیون محفوظ است</div>
      </section>
    </footer>
  );
}
