import React, { useState } from 'react'

export default function Counter() {
  const [state, setState] = useState(0)

  function Inc() {
    setState((prevdata) => prevdata + 1)
    setState((prevdata) => prevdata + 2)
    setState((prevdata) => prevdata + 3)

  }
  function Dec() {
    setState((prevdata) => prevdata - 1)
    setState((prevdata) => prevdata - 2)
    setState((prevdata) => prevdata - 3)

  }
  function Reset() {
      setState(state*0)
  }
  return (
    <center>
      <div style={{ "marginTop": "175px" }}>
        <h1 style={{ color: "FireBrick" }}>Counter is {state}</h1>

      </div>
      <div style={{ "height": "50px", "width": "50%" }}>
        <button style={{"hover":"background-color: yellow;", "background": "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)", "color": "MidnightBlue", "border": "4px solid black", "width": "305px", "border-radius": "30px" }} onClick={Inc}><h2><i>Click  Increment</i></h2></button>
      </div>

      <div style={{ "marginTop": "20px" }}>
        <button style={{"background": "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)","width": "305px", color: "Crimson", "border": "4px solid black", "border-radius": "30px" }} onClick={Dec}><h2><i>Click  Decrement</i></h2></button>
      </div>
      <div style={{ "marginTop": "13px" }}>
      <button  style={{"background": "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)" ,color: "black", "border": "4px solid black", "border-radius": "30px" , "width": "305px"}}  onClick={Reset}><h2><i>Reset</i></h2></button>

      </div>
    </center>
  )
}
