import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15);
  function addVal() {
    console.log("Vivek hai yaha", Math.floor(Math.random() * 10));
    counter += 1;
    setCounter(counter);
    console.log(counter);
  };
  function rmVal(){
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Vivek</h1>
      <h2>Current Value : {counter} </h2>
      <button onClick={addVal}>ADD {counter}</button>
      <button onClick={rmVal}>REMOVE {counter}</button>
      <p>FOOTER : {counter}</p>
    </>
  );
}

export default App;
