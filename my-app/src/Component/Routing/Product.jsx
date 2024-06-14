import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
    return (
        <div className='ProductName'>
            <div>
                <Link to="Jewellery">Jewellery</Link>
                <Link to="Electronics">Electronics</Link>
                <Link to="#">MensClothing</Link>
                <Link to="#">WomenClothing</Link>
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}
