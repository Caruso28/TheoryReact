import React from "react";
import Blog from "./Components/Blog"

function App2() {
  function clickMe(){
  }
  console.log("Click")
  function handleChange(e){
    const {value, name} = e.target
  console.log(name, value); 
  }
  return (
    <div>
      <Blog/>
      <button onClick={clickMe}>Click me</button>
      <div>
        <label>Nombre</label>
      <input type="test" name="name" onChange={handleChange} />
      </div>
      <div>
      <label>Apellido</label>
      <input type="test" name="surname" onChange={handleChange} />
      </div>
    </div>
  );
}
export default App2;