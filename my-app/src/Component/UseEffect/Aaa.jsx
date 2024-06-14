import React, { useState } from 'react'
import Table from './Table'
import Card from './Card'

export default function Aaa() {
    const [state, setState] = useState(true)
    return (
        <div>
            {
                state ? <Table /> : <Card />
            }

            <button onClick={()=>setState(true)}>show me table</button>
            <button onClick={()=>setState(false)}> show me card</button>
        </div>
    )
}
