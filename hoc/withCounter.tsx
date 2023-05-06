import { useState } from "react";

const WithCounter = (WrappedComponent: any) => {
  return (props:any) => {
    const [count, setCount] = useState(0);
    const icrementCount = () => {
      setCount(count + 1);
    };
    return <WrappedComponent count={count} icrementCount={icrementCount} {...props} />;
  };
};

export default WithCounter;
