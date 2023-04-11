import React from "react";
import useWave from "use-wave";
interface Props {
  classes: string;
  name: string | number;
  title?: string;
  children?: React.ReactNode;
}

const BaseButton: React.FC<Props> = ({
  classes,
  name,
  title,
  children,
}: Props) => {
  const wave = useWave({
    color: "#eee",
    easing: "ease-in",
  });

  return (
    <button
      ref={wave}
      className={`${classes} center-center gap-x-1.5 px-4 py-2 active:scale-90 !outline-none text-white cursor-pointer transition-all`}
      title={title}
    >
      {name}
      {children && <>{children}</>}
    </button>
  );
};

export default BaseButton;
