import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export  default function ProductDetails() {
    const {id} = useParams()
    const [state, setState] = useState({})


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setState(data);
            })
    }, [id])
    return (
        <div>
            <h1>Product</h1>
            <img src={state.image} alt="" />
            <p>{state.price}</p>
        </div>
    )
}
