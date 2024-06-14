import React, { useEffect, useState } from 'react'
import { auth, provaider } from './GoogleFirebase'
import { signInWithPopup } from 'firebase/auth'
import Header from './Header'

export default function Google() {

    const [google, setGoogle] = useState('')

    function submit() {
        signInWithPopup(auth, provaider).then((data) => {
            setGoogle(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }


    useEffect(()=>{

       setGoogle(
        localStorage.getItem("email")
       )
    },[])
    return (
        <div>

            {
                google ? <Header/>:

            <button onClick={submit}>submit to Google </button>
            }
        </div>
    )
}

// import { signInWithPopup } from 'firebase/auth'
// import React, { useEffect, useState } from 'react'
// import { auth, provaider } from './GoogleFirebase'
// import Counter from './Counter'


// export default function Google() {
//     const [google, setGoogle] = useState('')

//     function submit() {
//         signInWithPopup(auth, provaider).then((data) => {
//             setGoogle(data.user.email)
//             localStorage.setItem("email", data.user.email)
//         })

//     }

//     useEffect(()=>{
//         setGoogle(
//             localStorage.getItem('email')
//         )
//     },[])


//     return (

//         <div>
//             {
//                 google ? <Counter/> :
//                 <button onClick={submit}>Submit</button>
//             }
//         </div>
//     )
// }

