import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import MobileSearch from "@/components/SearchInput/MobileSearch";
import DarkModeButton from "@/components/Swapers/DarkModeButton";

export default function SideMenu(props: React.ComponentState) {
  const { toggleMobileMenu, setToggleMobileMenu } = props;

  const [themeText, setThemeText] = useState("تم خودکار");

  useEffect(() => {
    document.addEventListener("click", () => {
      setToggleMobileMenu(false);
    });
  });
  return (
    <>
      <aside
        className={`fixed inset-0 z-50 h-screen py-8 transition-all shadow-md w-[80vw] bg-primary-light dark:bg-primary-dark px-4 translate-x-0 lg:translate-x-full ${
          toggleMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <section>
          <div className="py-4 text-3xl font-extrabold text-center cursor-pointer whitespace-nowrap logo__gradient drop-shadow">
            <span className="text-sm">
              {"</ "}
            </span>
            <span className="px-1 max-w-max">
              فرانتیــون
            </span>
            <span className="text-sm">{">"}</span>
          </div>

          <ul className="grid grid-cols-1 divide-y divide-zinc-300 dark:divide-slate-400">
            <li>
              <MobileSearch />
            </li>
            <li className="flex items-center py-4 mt-8 gap-x-1">
              <DarkModeButton setThemeText={setThemeText} />
              <span>{themeText}</span>
            </li>
            <li className="py-4 mt-8">
              <DarkModeButton />
            </li>
            <li className="py-4 mt-8">
              <DarkModeButton />
            </li>
          </ul>
        </section>

        <MdOutlineClose
          onClick={() => setToggleMobileMenu(false)}
          className="absolute cursor-pointer top-4 left-3"
          size={22}
        />
      </aside>
    </>
  );
}
