// import React, { useRef } from 'react'

// export default function UnControlled() {
// const nameRef=useRef(null)
// const emailRef=useRef(null)

// function AddData(e) {
//     e.preventDefault()
//     console.log({
//         name:nameRef.current.value,
//         email:emailRef.current.value
//     })
// }

//   return (
//     <div>
//       <form onSubmit={AddData}>
//         <input type="text" placeholder='Enter Name' ref={nameRef} />
//         <input type="text" placeholder='Enter Email' ref={emailRef} />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }


import React, { useRef } from 'react'

export default function UnControlled() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)

  function AddData(e) {
    e.preventDefault()
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value

    })
  }
  return (
    <div>
      <form>
        <h1>UnControlled</h1>
        <input type="text" placeholder='Enter a Name' ref={nameRef} />
        <input type="text" placeholder='Enter a Name' ref={emailRef} />
        <button onClick={AddData}>Submit</button>
      </form>
    </div>
  )
}

