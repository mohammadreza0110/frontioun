import React from "react";
import useWave from "use-wave";

export default function BaseButton({ classes, title, children }: any) {
  const wave = useWave({
    color: "#eee",
    easing: "ease-in",
  });
  return (
    <button
      ref={wave}
      className={`${classes} center-center gap-x-1.5 px-4 py-2 active:scale-90 !outline-none text-white cursor-pointer transition-all`}
    >
      {title}
      {children && <>{children}</>}
    </button>
  );
}
