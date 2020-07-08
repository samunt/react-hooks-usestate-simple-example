import React, {useState} from 'react';

function CounterHooks() {
    const [count, setCount] = useState(0);
    // gives piece of state as first arg
    // gives function as second arg
    return (
        <div>
            <h1>Count is {count}</h1>
            <br/>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
    )
}
export default CounterHooks;
