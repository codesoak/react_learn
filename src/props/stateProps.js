import { useState } from "react"

const Parent = () => {
    const [count, setCount] = useState(1)
    return <Child count={count} />
}

const Child = (props) => {
    return <div>{props.count}</div>
}

export default Parent