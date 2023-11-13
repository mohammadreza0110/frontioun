"use client";

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Avatar from "@/components/Avatar";
import MobileMenuIcon from "@/components/Swapers/MobileMenuIcon";
import SideMenu from "./SideMenu";
import DesktopSearch from "@/components/SearchInput/DesktopSearch";
import FrontiounLogo from "@/components/FrontiounLogo";
import Link from "next/link";
import ThemeSwitch from "@/utils/ThemeSwitch";

export default function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
  const [loginHandler, setLoginHandler] = useState<boolean>(false);

  return (
    <header className="max-w-7xl w-full mx-auto fixed z-50 border lg:border-none rounded-2xl border-slate-200 dark:border-slate-700 lg:mt-6 lg:relative glass-container lg:glass-container-off">
      <section className="relative flex items-center justify-between py-2 m-auto lg:py-5 rounded-2xl lg:bg-primary-light lg:dark:bg-primary-dark px-7">
        <MobileMenuIcon
          toggleMobileMenu={toggleMobileMenu}
          setToggleMobileMenu={setToggleMobileMenu}
        />
        <SideMenu
          toggleMobileMenu={toggleMobileMenu}
          setToggleMobileMenu={setToggleMobileMenu}
        />

        <FrontiounLogo />

        <DesktopSearch />

        <div className="flex items-center justify-between gap-x-4">
          <span className="hidden lg:block">
            <ThemeSwitch />
          </span>

          <Avatar isLoggedIn={loginHandler} />
          {loginHandler && (
            <div className="hidden p-3 transition-colors rounded-full cursor-pointer lg:block hover:bg-slate-200 hover:dark:bg-slate-600 text-slate-600 dark:text-primary-light">
              <FaShoppingCart size={22} />
            </div>
          )}
        </div>
      </section>

      <section className="hidden w-10/12 py-5 m-auto shadow-md lg:block bg-slate-100 rounded-b-2xl px-11 dark:bg-slate-400">
        <ul className="center-center gap-x-8">
          <Link href={"/"} className="text-gray-700 cursor-pointer">
            صفحه اصلی
          </Link>
          <Link href={"/courses"} className="text-gray-700 cursor-pointer">
            دوره‌ها
          </Link>
          <Link href={"/blogs"} className="text-gray-700 cursor-pointer">
            بلاگ
          </Link>
          <li className="text-gray-700 cursor-pointer">درباره من</li>
        </ul>
      </section>
    </header>
  );
}
