import React, { useContext, useState,createContext  } from "react";
import Counter from "./Counter";

export const CounterContext = createContext(
    'mmmm'
);

export default function CounterProvider({ children }) {
  return (
    <CounterContext.Provider value={CounterContext}>
      <Counter />
    </CounterContext.Provider>
  );
}
