import { useContext, useReducer } from "react";
import { CounterContext } from "./CounterProvider";

// const count = useContext(CounterContext);
const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return { counter: state.counter + 1 };
    case "addTwo":
      return { counter: state.counter + 2 };
    case "decrement":
      return { counter: state.counter - 1 };
  }
};

// console.log(count);
export default function Counter() {
  const [number, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col">
      <button onClick={() => dispatch({typ})}>addOne</button>
      <button onClick={() => dispatch("addTwo")}>addTwo</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <div>{number.counter}</div>
    </div>
  );
}
