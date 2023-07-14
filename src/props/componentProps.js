const SomeComponent = () => {
    return <div>Some Component</div>
}

const Parent = () => {
    return <Child SomeComponent={<SomeComponent />} />
}

const Child = (props) => {
    return <div>{props.SomeComponent}</div>
}

export default Parent