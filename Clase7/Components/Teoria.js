import React from "react";
import Child from ".Components/Child"

function App() {

  function handleCallback(data) {
    console.log(data)
  }
  
  return (
    <div>
    <Child callback={handleCallback} />
    </div>
  );
}
export default App;