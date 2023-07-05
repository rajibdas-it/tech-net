import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { increment } from "./redux/features/counter/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className=" h-full bg-green-300 p-2"
        >
          increment
        </button>
        <div>{count}</div>
        <button className="h-full bg-red-300 p-2">increment</button>
      </div>
    </div>
  );
}

export default App;
