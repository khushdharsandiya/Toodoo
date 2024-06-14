import React, { useRef, useState } from 'react'

export default function Timer() {
  const [state, setState] = useState(0)
  const id = useRef(null)
  console.log(id)

  function Start() {
    id.current = setInterval(() => {
      setState((prevState) => prevState + 1)
    }, 1000)

  }
    function Stop() {
      clearInterval(id.current)
    }
    return (
      <div>
        <h1>Timer id {state}</h1>
        <button onClick={Start} >Start</button>
        <button onClick={Stop} >Stop</button>
      </div>
    )
  }

