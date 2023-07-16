import { useEffect, useState } from "react"

export const Home = () => {
    const [productId, setProductId] = useState(1)
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [productId])
    return (
        <div>
            <input
                type='number'
                onChange={(e) => setProductId(e.target.value)}
            />
            <h2>{product.title}</h2>
            <img src={product.thumbnail} />
        </div>
    )
}