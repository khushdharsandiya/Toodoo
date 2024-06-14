import React, { useState } from 'react'
import Map from './Map'
import Crud from './Crud'

export default function Turnarry() {
    const [state] = useState(true)
  return (
    <div>
      {
        state?<Map/>:<Crud/>
      }
    </div>
  )
}
