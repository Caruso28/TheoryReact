import React, { useState } from "react";
import Child1 from "../Ejercicio7b"
import Child2 from "../Ejercicio7c"

function App() {
  const [title, setTitle] = useState(false);
  const [number1, setNumber1] = useState(false)
  const [number2, setNumber2] = useState(false)
  }

function handleClick() {
  if (number1 < number2) {
    setTitle("2");
  } else if (number2 < number1) {
    setTitle("1")
  }
}

function handleCallback(number, origin) {
  if (origin=="2") {
    setNumber2(number)
  } else { setNumber1(number)
  }
}
  
  return (
    <div>
    <button onClick={handleClick}>Mostrar</button>
    <Child1 callback={handleCallback} />
    <Child2 callback={handleCallback} />
    </div>
  );
export default App;