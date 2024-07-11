import React from 'react'
import { useState  } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [incrementBy, setIncrementBy] = useState(5)
    function handleIncrement(){
        setCount(count + incrementBy)
    }
    function handleDecrement(){
        setCount(count - incrementBy)
    }

    function incrementByValue(){
        setIncrementBy(incrementBy + 1)
    }
    function decrementByValue(){
        setIncrementBy(incrementBy - 1)
    }
    return (
        <div>
            <h1>Count value is : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>We are incrementing the value by: {incrementBy}</h1>
            <button onClick={incrementByValue}>Increment by {incrementBy}</button>
            <button onClick={decrementByValue}>Decrement by {incrementBy}</button>
        </div>
    )
}

export default Counter