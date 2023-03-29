import React, { useState } from "react";

function App() {
    const [inputNumber, setInputNumber] = useState ("");
    const [arrNumeros, setArrNumeros] = useState ([]);

function handleChange(e) {
    const { valueAsNumber } = e.target;
    setAge(valueAsNumber);
  }

function handleClick() {
    const nerArr =  [...arrNumeros, inputNumber];
    setArrNumeros(newArr);
    setInputNumber("");
}
  return (
    <div>
      <input type="number" onChange={handleChange} value={inputNumber} />
      <button onClick={handleClick}>Agregar al array</button>
      <ul>
        {arrNumeros.map((num , key) => {
          return <li key={key}>{num}</li>;
        })}
      </ul>
      {age != 0 && (
        <>{age >= 18 ? <p>Sos mayor de edad</p> : <p>Sos menor de edad</p>}</> 
      )}
    </div>
  );
}
export default App2;