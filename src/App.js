import React, { useState } from 'react';

function App() {
 
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 5);
  const decrease = () => setCount(count - 5);

  return (
    <div>
      <div>{count}</div> 
      <button onClick={increase}>+5</button>
      <button onClick={decrease}>-5</button>
    </div>
  );
}

export default App;
