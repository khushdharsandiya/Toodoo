// import React, { useState } from 'react'

// export default function Controlled() {
//     const [state, setState] = useState("")
//     const [data, setData] = useState([])
//     function Addname(e) {
//         setState(e.target.value)
//     }
//     function Add(e) {
//         e.preventDefault()
//         setData([...data, state])
//         console.log(state)
//     }
//     return (
//         <div>
//             <form>
//                 <input type="text" placeholder='enter name' onChange={Addname} />
//                 <input type="text" placeholder='enter email'onChange={Addname} />
//                 <input type="submit" onClick={Add} />
//             </form>
//         </div>
//     )
// }



// import React, { useState } from 'react';

// export default function Controlled() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [data, setData] = useState([]);

//     function Name(e) {
//         setName(e.target.value);
//     }

//     function Email(e) {
//         setEmail(e.target.value);
//     }

//     function Submit(e) {
//         e.preventDefault();
//         setData([...data, { name, email }]);
//         console.log({ name, email });
//         setName('');
//         setEmail('');
//     }

//     return (
//         <div>
//             <form onSubmit={Submit}>
//                 <input type="text" placeholder='enter name' value={name} onChange={Name} />
//                 <input type="text" placeholder='enter email' value={email} onChange={Email} />
//                 <input type="submit" />
//             </form>
//         </div>
//     );
// }


import React, { useState } from 'react'

export default function Controlled() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState([])

    function Name(e) {
        setName(e.target.value)
    }

    function Email(e) {
        setEmail(e.target.value)
    }

    function submit(e) {
        e.preventDefault()
        setData([...data, { name, email }])
        console.log({ name, email })
        setName('')
        setEmail('')
    }


    return (
        <div>
            <form>
                <h1>Controlled</h1>
                <input type="text" placeholder='Enter a Name' value={name} onChange={Name} />
                <input type="text" placeholder='Enter a Name' value={email} onChange={Email} />
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

