import React, { useCallback } from "react";

  function Child1(props) {
    const { callBack } = props;

  function getRandom() {
    useCallback(Math.random());
  }
  return (
    <div>
    <h3> {Info} </h3>
    <button onClick={getRandom}>Generar numero</button>
    {number && <div>{number}</div>}
    </div>
  )
}
export default Child1;