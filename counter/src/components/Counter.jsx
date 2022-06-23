import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./counter.css";
const Counter = () => {
  const prevBtn = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 0) {
      prevBtn.current.disabled = true;
    } else {
      prevBtn.current.disabled = false;
    }
  }, [count]);
  return (
    <div className="py-5">
      <button
        ref={prevBtn}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span className="mx-3">{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default Counter;
