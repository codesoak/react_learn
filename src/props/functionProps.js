const Parent = () => {
    const someFunction = () => console.log('Hi')
    return <Child someFunction={someFunction} />
}

const Child = (props) => {
    return <button onClick={props.someFunction}>Button</button>
}

export default Parent