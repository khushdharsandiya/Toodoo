import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Electronic() {
    console.log("object")
    const [state, setState] = useState([])
    const [search, setSearch] = useState("")
    const [sortedProducts, setSortedProducts] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setState(data)
                setSortedProducts(data)
            })

    }, [])


    function Search(e) {
        setSearch(e.target.value)
        const filteredProducts = state.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
        setSortedProducts(filteredProducts)
    }

    

    function sortProducts() {
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
    }   
    return (
        <div>
            <input type="search" name="" id="" onChange={Search} style={{ outline: "none" }} />
            <button onClick={sortProducts}>Sort by Price</button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {

                    sortedProducts.map((el, i) => {
                        return <div style={{ height: "500px", width: "40%" }}>
                            <Link to={`/ProductDetails/${el.id}`}><li>{el.title}</li></Link>
                            <img style={{ height: "250px", width: "300px" }} src={el.image} alt="" />
                            <h1>{el.price}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    )
}