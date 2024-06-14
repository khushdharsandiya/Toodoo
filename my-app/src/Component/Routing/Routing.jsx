import React from 'react'
import { Link } from 'react-router-dom'

export default function Routing() {
  return (
    <div>

      <Link to="/Product">Product</Link>

      <Link to="/Counter">Counter</Link>
      <Link to="/Header">Header</Link>
      <Link to="/Crud">Crud</Link>
    </div>
  )
}
