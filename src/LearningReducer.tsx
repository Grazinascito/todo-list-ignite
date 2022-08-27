import { useState } from "react";

export const LearningReducer = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <>
      <h1 style={!color? {color: '#fff'} : {color: '#c66d6d'}}> Contador</h1>
      <p style={{color: '#fff'}}>{count}</p>
      <button onClick={() => setCount(count + 1)}>Botao</button>
      <button onClick={() => setColor(prevState => !prevState)}>Botao de cor</button>
    </>
  );
};
