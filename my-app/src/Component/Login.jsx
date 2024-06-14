import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import { app } from "../Firebase";

const auth = getAuth(app);
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function Login() {
        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
               alert('Success')
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={Login}>Submit</button>
        </div>
    )
}
