import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteAction } from './Action'
// import { deletAction } from './Reduxx/Actionn'

export default function Display() {
    const data = useSelector((store) => { return store })
    const dispatch = useDispatch()
    function Delete(i) {
        dispatch(DeleteAction(i))
    }
    return (
        <div>
            <h1>display</h1>
            {
                data.map((el,i) => {
                    return <>
                    <li>{el}</li>
                    <button onClick={()=>{Delete(i)}}>Delete</button>
                    
                    </>
                })
            }
        </div>
    )
}