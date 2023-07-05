import { useState } from "react";

const MultipleStates = () => {
    const [count, setCount] = useState(0)
    const [counterValue, setCounterValue] = useState(1)
    return (
        <div>
            <div>
            <p>Count: {count}</p>
                <button onClick={() => setCount(count + counterValue)}>
                    Add {counterValue}
                </button>
                <button onClick={() => setCount(count - counterValue)}>
                    Subtract {counterValue}
                </button>
            </div>
            <div>
            <p>Count: {counterValue}</p>
                <button onClick={() => setCounterValue(counterValue + 1)}>
                    Increase Counter Value
                </button>
                <button onClick={() => setCounterValue(counterValue - 1)}>
                    Decrease Counter Value
                </button>
            </div>
        </div>
    );
};

export default MultipleStates;