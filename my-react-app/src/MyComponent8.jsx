import React, { useState, useEffect, useRef } from "react";

function MyComponent8() {

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT REMOVED")
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "aqua";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "aqua";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "aqua";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me 1!</button>
      <br></br>
      <input ref={inputRef1}></input>
      <br></br>

      <button onClick={handleClick2}>Click me 2!</button>
      <br></br>
      <input ref={inputRef2}></input>
      <br></br>

      <button onClick={handleClick3}>Click me 3!</button>
      <br></br>
      <input ref={inputRef3}></input>
    </div>
  );
}

export default MyComponent8;
