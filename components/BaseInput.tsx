import React from "react";

export default function BaseInput({ type, placeholder, children }: any) {
  return (
    <div className="flex items-center w-64 p-2 bg-gray-100 rounded-lg">
      {children}
      <input
        className="flex-1 bg-gray-100 outline-none placeholder:text-xs"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
