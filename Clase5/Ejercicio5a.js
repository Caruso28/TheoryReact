import React, { useState } from "react";

function App() {
  const frutas = ["banana", "manzana", "melon", "naranja", "uva"];

  return (
    <div>
      <ul>
        {frutas.map((fruta , key) => {
          return <li key={key}>{fruta}</li>;
        })}
      </ul>
    </div>
  );
}
export default App;