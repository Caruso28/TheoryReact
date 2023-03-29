import React, { useState } from "react";
import Blog from "./Components/Blog"

function App() {
  const [message, setMessage] = useState ("");
  const [counter, setCounter] = useState (0);

  function handleCounter() {
    setCounter(prevCounter => prevCounter + 1);
  }
  function handleClick(){
    setMessage("Soy un mensaje actualizado");
  }
  function handleChange(e){
    const {value, name} = e.target
    setMessage(value);
  }

  return (
    <div>
      <span>Counter: {counter}</span>
      <button onClick={handleCounter}>+1</button>
      <span>El valor del estado message es: {message}</span>
      <Blog/>
      <button onClick={clickMe}>Click me</button>
      <div>
        <label>Mensaje</label>
      <input type="test" name="name" onChange={handleChange} />
      </div>
    </div>
  );
}
export default App2;