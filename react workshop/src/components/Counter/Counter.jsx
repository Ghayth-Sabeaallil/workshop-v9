import "./Counter.css";
import { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
           <div className="counter-box">
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
            <p id="result">{count}</p>
           </div>
        </>
    );
};

export default Counter;
