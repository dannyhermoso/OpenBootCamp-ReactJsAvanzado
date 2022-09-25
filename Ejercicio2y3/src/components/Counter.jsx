import useCounter from "../hooks/useCounter";

const Counter = ({ initialValue }) => {

    const { count, increment, decrement, reset, steps, step } = useCounter( initialValue );

    return(
        <>
        <h1>Counter numbers</h1>
            HOLAAA
        <h2>{count}</h2>
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={decrement}>Decrement</button>
        <button type="button" onClick={reset}>Reset</button>
        <button type="button" onClick={step}>Steps x{steps}</button>
        </>
    )
}

export default Counter


