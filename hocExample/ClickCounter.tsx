import WithCounter from "@/hoc/withCounter";
import React, { useState } from "react";

function ClickCounter({ count, icrementCount, name }: any) {
  return (
    <div>
      <h2 onClick={icrementCount} className="cursor-pointer">
        clicked {count} times
      </h2>
    </div>
  );
}

export default WithCounter(ClickCounter);
