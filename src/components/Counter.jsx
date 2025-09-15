import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main-div">
      <div className="counter-box">
        <p className="count-display">{count}</p>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>Increment By 1</button>
          <button onClick={() => setCount(count >0 ? count-1 :  0)}>Decrement By 1</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
