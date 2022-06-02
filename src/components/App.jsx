import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMousedOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMousedOver() {
    setMousedOver(true);
  }

  function handleMousedOut() {
    setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMousedOver}
        onMouseOut={handleMousedOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
