import React, { useState } from 'react'

export default function Obj() {

        const[state]=useState({
            name:"khush",
            email:"patel@gmail.com"
        })
    
    return (
    <div>
        <h1>{state.name}</h1>
        <h1>{state.email}</h1>
    </div>
  )
}
