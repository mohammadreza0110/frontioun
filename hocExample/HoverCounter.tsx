import WithCounter from "@/hoc/withCounter";
import React, { useState } from "react";

function HoverCounter({ count, icrementCount }:any) {
  return (
    <div>
      <h2 onMouseOver={icrementCount}>clicked {count} times</h2>
    </div>
  );
}
export default WithCounter(HoverCounter);
