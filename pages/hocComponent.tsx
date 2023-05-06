import React from "react";
import ClickCounter from "@/hocExample/ClickCounter";
import HoverCounter from "@/hocExample/HoverCounter";
import Counter from "@/components/Counter";

export default function hocComponent() {
  return (
    <div className="container py-20 mx-auto text-center">
      <ClickCounter name={"test props"} />
      <HoverCounter />
      <Counter />
    </div>
  );
}
