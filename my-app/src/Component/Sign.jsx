import React, { useState } from 'react'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase';

const auth = getAuth(app);
export default function Sign() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function SignUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                alert("Success")
            })
            .catch((error) => {
                console.log(error)
                
            });

    }
    return (
        <div>
            <h1>Register</h1>
            <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={SignUp}>Submit</button>
        </div>
    )
}
