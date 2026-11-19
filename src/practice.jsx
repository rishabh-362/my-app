import React, { useState } from "react";
import Greeting from "./greeting.jsx";

export default function Practice() {
  const [count, setCount] = useState(0);
  const [textToggle, setTextToggle] = useState(false);
  const[text, setText] = useState();
  return (
    <div>
      {/* 1. Create a Counter App
        Create a counter that displays 0 and has three buttons: Increment, Decrement, and Reset.
        Practice: useState, event handling */}
      <h3>{textToggle ? count : ""}</h3>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increament
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
      <div>
            <input
              className="text-input mt-3 p-2"
              type="text"
              value={text}
              placeholder="Enter text"
              onChange ={(e) => setText (e.target.value)}
            />
      </div>
      <p>{text}</p>

      {/* Create a Greeting Component

Create a Greeting component that accepts a user's name through props and displays Hello, Rishabh!.

Practice: Components, props */}
<Greeting name='Rishabh shah' />

    </div>

  );
}
