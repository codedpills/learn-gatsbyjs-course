import React, { useState } from "react";

const FunctionCounter = () => {
  const [count, updateCount] = useState({ number: 8 });
  return (
    <div>
      <h2>Function Counter: {count.number} </h2>
      <hr />
      <button onClick={() => updateCount({ number: count.number + 1 })}>
        Increase count
      </button>
      <button onClick={() => updateCount({ number: count.number - 1 })}>
        Decrease count
      </button>
    </div>
  );
};

export default FunctionCounter;
