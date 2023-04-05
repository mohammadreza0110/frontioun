import React, { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function MobileMenuIcon(props: any) {
  const { toggleMobileMenu, setToggleMobileMenu } = props;

  const handleToggle = (e: any) => {
    e.stopPropagation();
    setToggleMobileMenu((prev: any) => (prev = !prev));
  };


  return (
    <label
      className="lg:hidden !bg-transparent !border-none text-primary-dark dark:text-primary-light"
      onClick={(e: any) => handleToggle(e)}
    >
      <FiMenu size={30} />
    </label>
  );
}
