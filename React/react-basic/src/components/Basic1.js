import React, { useState } from "react";

const Basic1 = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };

  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
      <h1>HEllo React {props.name}</h1>
    </div>
  );
};

export default Basic1;
