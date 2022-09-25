import { useState } from 'react'

const useCounter = (initialValue = 0) => {

    const [count, setCount] = useState(initialValue)
    const [steps, setSteps] = useState(1)

    const increment = () => {
        const value = count === 40 ? count : count + steps
        setCount(value) 
    }

    const decrement = () => {
        const value = count === -40 ? count : count - steps
        setCount(value)
    }

    const reset = () => {
        setCount(initialValue || 0)
    }

    const step = () => {
        steps === 4 ? setSteps(1) : setSteps(steps + 1)
    }

    return {
        count,
        setCount,
        increment,
        decrement,
        reset,
        step, 
        steps
    }
}

export default useCounter