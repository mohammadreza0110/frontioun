import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import DarkModeButton from "@/components/Swapers/DarkModeButton";
import Avatar from "@/components/Avatar";
import classes from "./style";
import MobileMenuIcon from "@/components/Swapers/MobileMenuIcon";
import SideMenu from "../SideMenu";
import DesktopSearch from "@/components/SearchInput/DesktopSearch";

export default function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
    <header className="container px-4 m-auto">
      <section className={classes.header.wrapper}>
        <MobileMenuIcon
          toggleMobileMenu={toggleMobileMenu}
          setToggleMobileMenu={setToggleMobileMenu}
        />
        <SideMenu
          toggleMobileMenu={toggleMobileMenu}
          setToggleMobileMenu={setToggleMobileMenu}
        />

        <div className={classes.header.frontioun_logo.wraper}>
          <span className={classes.header.frontioun_logo.tags}>{"</ "}</span>
          <span className={classes.header.frontioun_logo.text}>Frontioun</span>
          <span className={classes.header.frontioun_logo.tags}>{">"}</span>
        </div>

        <DesktopSearch />

        <div className={classes.header.user_area.wrapper}>
          <span className="hidden lg:block">
            <DarkModeButton />
          </span>

          <Avatar />

          <div className={classes.header.user_area.cart}>
            <FaShoppingCart size={22} />
          </div>
        </div>
      </section>

      <section className={classes.header.subHeader.wrapper}>
        <ul className={classes.header.subHeader.navbar}>
          <li className={classes.header.subHeader.items}>صفحه اصلی</li>
          <li className={classes.header.subHeader.items}>دوره‌ها</li>
          <li className={classes.header.subHeader.items}>بلاگ</li>
          <li className={classes.header.subHeader.items}>درباره من</li>
        </ul>
      </section>
    </header>
  );
}
