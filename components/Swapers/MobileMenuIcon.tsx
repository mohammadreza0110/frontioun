import React, { useRef, useState } from "react";
import classes from "@/layouts/Header/style";
import { FiMenu } from "react-icons/fi";

export default function MobileMenuIcon(props: any) {
  const { toggleMobileMenu, setToggleMobileMenu } = props;

  const handleToggle = (e: any) => {
    e.stopPropagation();
    setToggleMobileMenu((prev: any) => (prev = !prev));
  };


  return (
    <label
      className={classes.side_bar.hamburger_icon}
      onClick={(e: any) => handleToggle(e)}
    >
      <FiMenu size={30} />
    </label>
  );
}
