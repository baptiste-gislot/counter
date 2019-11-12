import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>Le compteur est à {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input type='text' placeholder='Set the initial state of counter' onChange={(event) => setCount(parseInt(event.target.value))}></input>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );

};

export default Counter;