import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export default function GarrantyCard({ children, title }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-40 transition-all duration-200 hover:scale-105 hover:commitment_card bg-slate-200 hover:bg-white rounded-3xl">
      {children}
      <span>{title}</span>
    </div>
  );
}
