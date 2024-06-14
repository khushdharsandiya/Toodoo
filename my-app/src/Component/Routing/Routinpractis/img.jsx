import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const { id } = useParams()
    const [state, setState] = useState({})

    // Assuming you have the image URL instead of fetching it from an API
    useEffect(() => {
        // You can directly set the image URL here instead of fetching
        setState({
            image: 'https://example.com/image.jpg', // Replace 'https://example.com/image.jpg' with your actual image URL
            price: 'Your product price', // Add your product price here
            // Add other properties as needed
        });
    }, [id])

    return (
        <div>
            <h1>Product</h1>
            <img src={state.image} alt="Product" /> {/* Add alt text */}
            <p>{state.price}</p>
        </div>
    )
}
