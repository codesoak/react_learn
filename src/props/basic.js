const Parent = () => {
    return <Child message='Hello There'/>
}

const Child = (props) => {
    return <div>{props.message}</div>
}

export default Parent