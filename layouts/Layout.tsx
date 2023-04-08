import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
