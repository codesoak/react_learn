import { useEffect } from "react"

export const Home = () => {
    useEffect(() => {
        const element = document.getElementById('main')
        element.style.color = 'green'
        // Cleanup function (optional)
        return () => {
            // Reset the DOM changes in cleanup function
            element.style.color = 'initial'
        }
    }, [])
    return <div id='main'>DOM Manipulation</div>
}