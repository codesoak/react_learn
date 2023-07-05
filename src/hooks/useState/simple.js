import { useState } from "react";

const Simple = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Add 1
            </button>
            <button onClick={() => setCount(count - 1)}>
                Subtract 1
            </button>
        </>
    );
};

export default Simple;