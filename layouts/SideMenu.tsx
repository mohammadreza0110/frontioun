import React from "react";
import classes from "./Header/style";
import { MdOutlineClose } from "react-icons/md";

export default function SideMenu(props: React.ComponentState) {
  const { toggleMobileMenu, setToggleMobileMenu } = props;
  return (
    <>
      {toggleMobileMenu && (
        <aside className="fixed inset-0 z-50 h-screen py-8 center w-72 bg-primary-light dark:bg-primary-dark">
          <div className={classes.side_bar.frontioun_logo.wraper}>
            <span className={classes.side_bar.frontioun_logo.tags}>
              {"</ "}
            </span>
            <span className={classes.side_bar.frontioun_logo.text}>
              Frontioun
            </span>
            <span className={classes.side_bar.frontioun_logo.tags}>{">"}</span>
          </div>
          <MdOutlineClose
            onClick={() => setToggleMobileMenu(false)}
            className="absolute cursor-pointer top-4 left-3"
            size={22}
          />
        </aside>
      )}
    </>
  );
}
