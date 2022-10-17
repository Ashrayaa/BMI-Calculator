import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div className="flex flex-col mt-24 gap-6 items-center text-2xl font-bold">
      Count: {count}
      <button
        onClick={() => setCount(initialCount)}
        className=" hover:bg-orange-700 border w-32 bg-orange-500 p-2 font-semibold text-lg rounded-3xl text-white"
      >
        Reset
      </button>
      <button
        onClick={() => setCount(count + 1)}
        className=" hover:bg-orange-700 border w-32 bg-orange-500 p-4 font-semibold text-lg rounded-3xl text-white"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className=" hover:bg-orange-700 border w-32 bg-orange-500 p-4 font-semibold text-lg rounded-3xl text-white"
      >
        Decrement
      </button>
    </div>
  );
}
export default HookCounterTwo;
