import React, { useEffect, useState } from 'react'
import { Todos } from './Todos'

export const Home = () => {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    fetch('Todo.json').then(res=>res.json()).then(data=>setTodos(data))
  },[])
  return (
    <div>
      <Todos todos={todos}/>
    </div>
  )
}
