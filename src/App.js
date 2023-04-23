import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tick } from "./Redux/Reducers/Counter.reducer";

function App() {
  const dispatcher = useDispatch();
  const counterState = useSelector((state) => state.counter);
  return (
    <div className="counter-app-container">
      <div className="counter-form">
        <button
          onClick={() => {
            dispatcher(tick("d"));
          }}
        >
          -
        </button>
        <h1>{counterState.value}</h1>
        <button
          onClick={() => {
            dispatcher(tick("i"));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
