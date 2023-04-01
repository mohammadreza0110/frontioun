import React, { useEffect, useState } from "react";
import classes from "./Header/style";
import { MdOutlineClose } from "react-icons/md";
import MobileSearch from "@/components/SearchInput/MobileSearch";
import DarkModeButton from "@/components/Swapers/DarkModeButton";

export default function SideMenu(props: React.ComponentState) {
  const { toggleMobileMenu, setToggleMobileMenu } = props;

  const [themeText, setThemeText] = useState();

  useEffect(() => {
    document.addEventListener("click", () => {
      setToggleMobileMenu(false);
    });
  });
  return (
    <>
      <aside
        className={classes.side_bar.wrapper(toggleMobileMenu)}
        onClick={(e) => e.stopPropagation()}
      >
        <section>
          <div className={classes.side_bar.frontioun_logo.wraper}>
            <span className={classes.side_bar.frontioun_logo.tags}>
              {"</ "}
            </span>
            <span className={classes.side_bar.frontioun_logo.text}>
              Frontioun
            </span>
            <span className={classes.side_bar.frontioun_logo.tags}>{">"}</span>
          </div>

          <ul className="grid grid-cols-1 divide-y divide-zinc-300 dark:divide-slate-400">
            <li>
              <MobileSearch />
            </li>
            <li className="flex items-center py-4 mt-8 gap-x-3">
              <DarkModeButton />
              <span>تم</span>
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
