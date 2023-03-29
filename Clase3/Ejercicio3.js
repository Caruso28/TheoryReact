import React from "react";

function App() {
  function clickMe(){
  console.log("Click")
  }
  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      </div>
  );
}
export default App;