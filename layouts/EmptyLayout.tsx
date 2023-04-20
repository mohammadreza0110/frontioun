import React from "react";
interface Props {
  children: React.ReactNode;
}

export default function EmptyLayout({ children }: Props) {
  return <>{children}</>;
}
