import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import DarkModeButton from "@/components/Swapers/DarkModeButton";
import Avatar from "@/components/Avatar";
import MobileMenuIcon from "@/components/Swapers/MobileMenuIcon";
import SideMenu from "../SideMenu";
import DesktopSearch from "@/components/SearchInput/DesktopSearch";

export default function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
    <header className="container fixed z-50 mt-10 xl:px-16 glass-container">
      <section className="relative flex items-center justify-between py-6 m-auto shadow-md rounded-2xl lg:py-9 px-7">
        <MobileMenuIcon
          toggleMobileMenu={toggleMobileMenu}
          setToggleMobileMenu={setToggleMobileMenu}
        />
        <SideMenu
          toggleMobileMenu={toggleMobileMenu}
          setToggleMobileMenu={setToggleMobileMenu}
        />

        <div className="m-auto text-2xl font-extrabold cursor-pointer lg:text-4xl whitespace-nowrap logo__gradient drop-shadow lg:m-0">
          <span className="text-sm lg:text-base">{"</ "}</span>
          <span className="px-1 lg:inline-block max-w-max">فرانتیــون</span>
          <span className="text-sm lg:text-base">{">"}</span>
        </div>

        <DesktopSearch />

        <div className="flex items-center justify-between gap-x-4">
          <span className="hidden lg:block">
            <DarkModeButton />
          </span>

          <Avatar />

          <div className="hidden p-3 transition-colors rounded-full cursor-pointer lg:block hover:bg-slate-200 hover:dark:bg-slate-600 text-slate-600 dark:text-primary-light">
            <FaShoppingCart size={22} />
          </div>
        </div>
      </section>

      <section className="hidden w-10/12 py-5 m-auto shadow-md lg:block bg-slate-100 rounded-b-2xl px-11 dark:bg-slate-400">
        <ul className="center-center gap-x-8">
          <li className="text-gray-700 cursor-pointer">صفحه اصلی</li>
          <li className="text-gray-700 cursor-pointer">دوره‌ها</li>
          <li className="text-gray-700 cursor-pointer">بلاگ</li>
          <li className="text-gray-700 cursor-pointer">درباره من</li>
        </ul>
      </section>
    </header>
  );
}
