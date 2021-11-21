import {React, useState} from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="content">
      <div className="counter">
        <h1>Counter</h1>
        <p>Count: {counter}</p>
        <button onClick={() => {setCounter(counter + 1)}}>Click to Add</button>
      </div>
    </div>
  );
}

export default Counter;