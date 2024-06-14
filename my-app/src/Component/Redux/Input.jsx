import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from './Action'

export default function Input() {
  const [state, setState] = useState('')
  const dispatch = useDispatch()

  function addtext(e) {
    setState(e.target.value)
  }
  function addTodo() {
    dispatch(addAction(state))
  }
  return (
    <div>
      <h1>input</h1>
      <input type="text" placeholder='enter name' onChange={addtext} />
      <button onClick={addTodo}>click</button>
    </div>
  )
}