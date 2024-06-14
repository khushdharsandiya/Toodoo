// import React, { useState } from 'react'

// export default function Map() {
//     const [data] =useState(["Sujalyo","Hirenyo","D.K"])
//   return (
//     <>
//        <h2>Map</h2>
//        {
//         data.map((el,i)=>{
//            return<li>{el}</li>
//         })
//     }
//     </>
//   )
// }

import React, { useState } from 'react'

export default function Map() {
  const [data] = useState(["abc", "def", "ghi"])  

  return (
    <div>
      <h2>Map</h2>{

        data.map((el, index) => {
          return <li key={index}>{el}</li>
        })
      }
    </div>
  )
}



