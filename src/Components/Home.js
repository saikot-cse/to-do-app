import React, { useEffect, useState } from 'react'
import { Todos } from './Todos'

export const Home = () => {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    fetch('Todo.json').then(res=>res.json()).then(data=>setTodos(data))
  },[])
  return (
    <div style={{height: "100vh"}} className='d-flex justify-content-center align-items-center bg-light flex-column'>
      <h1 className='text-center fw-bold mb-5'>To-Do App</h1>
      <Todos todos={todos}/>
    </div>
  )
}
