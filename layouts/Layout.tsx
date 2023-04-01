import React from "react";
import Header from "./Header";

export default function DefaultLayout({ children }: any) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
