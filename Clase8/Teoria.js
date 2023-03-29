import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchData();
    }, []);

  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/juanigallo")
    const datatoJson = await getData.json();

    setUser(dataToJson);
    console.log(datatoJson);
  }
  
  return (
    <>
    <p>Mi nombre es: {user.name}</p>
    <p>Yo vivo en: {user.location}</p>
    <p>Mi bio es: {user.bio}</p>
    <p>Trabajo en: {user.compañy}</p>
    </>
  );
}
export default App;