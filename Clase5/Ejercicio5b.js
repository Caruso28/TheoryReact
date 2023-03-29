import React, { useState } from "react";

function App() {
  const [showImage, setShowImage] = useState (true);

  function handleClick() {
    setShowImage(prev => !prev);
  }

  return (
    <div>
      <button onClick={handleClick}>Mostrar / No Mostrar Imagen</button>
      {showImage && (<img src="file:///C:/Users/Guido/Downloads/Books-3.webp" />)}
    </div>
  );
 }
export default App;