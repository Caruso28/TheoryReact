import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState (0);

  function handleCounter() {
    setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter}></button>
    </div>
  );
}
export default App;