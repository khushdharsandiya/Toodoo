// import React, { useEffect, useState } from 'react'

// export default function Practice() {
//     const [state, setState] = useState(0)
//     useEffect(() => {
//         setInterval(() => {
//             setState((data) => data + 1)
//         }, 1000);
//     }, [])

//     return (
//         <div>
//             <h1 >{state}</h1>
//         </div>
//     )
// }

// import React, { useEffect, useState } from 'react'

// export default function Prectice() {
//     const [state,setState]=useState(0)

//     useEffect(()=>{
//         setInterval(()=>{
//             setState((data)=> data+1)
//         },1000)
//     },[])
//   return (
//     <div>
//        <h1>{state}</h1>
//     </div>
//   )
// }






// import React, { useState } from 'react'

// export default function Practice() {
//     const [state, setState] = useState([])

//     fetch('https://fakestoreapi.com/products/category/jewelery')
//         .then(res => res.json())
//         .then(data => {

//             console.log(data)
//             setState(data.map((el) => {
//                 return el.title
//             }))
//         })

//     return (
//         <h1>
//             {state.map((el) => {
//                 return <li>{el}</li>
//             })}
//         </h1>
//     )
// }
















// import React, { useState } from 'react'

// export default function Prectice() {
//     const [state,setState]=useState("Jambli")

//   return (
//     <div>
//          <h1>My Facvourite Color is {state}</h1>
//          <button type='button' onClick={()=>setState("Blue")}>Blue</button>
//          <button type='button' onClick={()=>setState("Red")}>Red</button>
//     </div>
//   )
// }

