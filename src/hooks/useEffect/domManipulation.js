import { useEffect } from "react"

export const Home = () => {
    useEffect(() => {
        const element = document.getElementById('main')
        element.style.color = 'green'
    }, [])
    return <div id='main'>DOM Manipulation</div>
}