import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";

interface Props {
  classes?: string;
  sunClasses?: string;
}

const ThemeSwitch = ({ sunClasses, classes }: Props) => {
  const [theme, setTheme] = useState<string | null>();

  const themeChanger = () => {
    if (localStorage?.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const themeManager = (val: string) => {
    if (val === "light") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      themeChanger();
    }

    if (val === "dark") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      themeChanger();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage?.getItem("theme"));
    } else {
      localStorage.setItem("theme", "dark");
      setTheme(localStorage?.getItem("theme"));
    }
    themeChanger();
  }, []);

  return (
    <div className={classes}>
      {theme === "light" && (
        <div className="cursor-pointer" onClick={() => themeManager("dark")}>
          <BsSun
            size={30}
            className={`${sunClasses} text-slate-700 w-[31px] fill-current`}
          />
        </div>
      )}

      {theme === "dark" && (
        <div className="cursor-pointer" onClick={() => themeManager("light")}>
          <MdOutlineDarkMode
            size={30}
            className="w-[31px] fill-current text-slate-100"
          />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
