// File for learn useReducer

import { useReducer } from "react";

const reducerFunc = (state: any, action: any) => {
  switch (action.type) {
    case "increment": {
     
        return {...state, count: action.count + 1};

    }
    case "color": {
      return  {...state, color: !state.color}
    }
    default:  throw Error('Unknown action: ' + action.type);
  }
};

export const LearningReducer = () => {
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState(false);

  const [state, dispatch] = useReducer(reducerFunc, {
    color: false,
    count: 0
  });
  console.log(state)

  const handleColor = () => {
    dispatch({
      type: 'color',
    })
  }
  const handleClick = () => {
    dispatch({
      type: 'increment',
      count: state.count
    })

    console.log(state.count)
  }

  return (
    <>
      <h1 style={!state.color ? { color: "#fff" } : { color: "#c66d6d" }}>
        Contador
      </h1>
      <p style={{ color: "#fff" }}>{state.count}</p>
      <button onClick={handleColor}>muda cor</button>
     <button onClick={handleClick}>
        incremento
      </button>
    </>
  );
};
