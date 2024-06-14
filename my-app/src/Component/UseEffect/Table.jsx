import React, { useEffect, useState } from 'react'

export default function Table() {
    const [state,setState] = useState(<h1>this is table</h1>)

    useEffect(() => {
        console.log("mount")
        return (() => {
            alert("unmount")
        })
    }, [])
    return (
        <div>
            {state}

            <button onClick={()=>{setState(<h1>D.K</h1>)}}>Click Me</button>
        </div>
    )
}
