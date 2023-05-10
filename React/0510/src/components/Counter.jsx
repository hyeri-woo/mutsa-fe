import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount(prev => prev - 1);
    }
    const increment = () => {
        setCount(prev => prev + 1);
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button type="button" onClick={decrement}>-</button>
            <button type="button" onClick={increment}>+</button>
        </div>
    )
}
