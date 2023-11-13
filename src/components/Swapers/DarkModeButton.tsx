"use client";
import React, { useEffect } from "react";
import { IoContrastOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const DarkModeButton = ({ setThemeText }: any) => {
  let { systemTheme, theme, setTheme } = useTheme();
  const changeTheme = (target: any, checked: any, setValue: string) => {
    target && (target.checked = checked);

    setTheme(setValue);
    if (setThemeText) {
      setValue === "dark"
        ? setThemeText("تم تیره")
        : setValue === "light"
        ? setThemeText("تم روشن")
        : setThemeText("تم خودکار");
    }
  };

  const handleThemeToggle = ({ target }: any) => {
    theme === "system"
      ? changeTheme(target, false, "dark")
      : theme === "dark"
      ? changeTheme(target, true, "light")
      : theme === "light" && changeTheme(null, null, "system");
  };

  useEffect(() => {
    setTheme("system");
  }, [setTheme]);

  return (
    <NoSSR>
      <div className="transition-colors rounded-full cursor-pointer hover:bg-slate-200 hover:dark:bg-slate-600">
        {theme === "system" && (
          <button
            onClick={handleThemeToggle}
            title="تم سایت بر اساس سیستم شما"
            className="p-2.5"
          >
            <IoContrastOutline
              title="تم سایت بر اساس سیستم شما"
              className="text-primary-dark dark:text-primary-light"
              size={27}
            />
          </button>
        )}

        {theme !== "system" && (
          <button
            className="p-2"
            title="تم سایت بر اساس سیستم شما"
            onClick={(e) => handleThemeToggle(e)}
            role="button"
            tabIndex={0}
          >
            {theme === "dark" ? (
              <MdOutlineDarkMode
                size={30}
                className="w-[31px] fill-current text-slate-600 dark:text-primary-light"
              />
            ) : (
              <BsSun
                size={30}
                className="w-[31px] fill-current text-slate-600 dark:text-primary-light"
              />
            )}
          </button>
        )}
      </div>
    </NoSSR>
  );
};

export default DarkModeButton;
