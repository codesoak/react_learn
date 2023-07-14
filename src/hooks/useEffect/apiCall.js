import { useEffect } from "react"

export const Home = () => {
    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])
    return <div>product</div>
}