import React, { useEffect, useState } from 'react'
import {NewTodo} from './NewTodo';
import { Todos } from './Todos'
import { v4 as uuidv4 } from 'uuid';
export const Home = () => {
  const [todos,setTodos] = useState([]);
  const handleAddToDo = (todo)=>{
    setTodos(prevTodos=>{
      return [...prevTodos, {id:uuidv4(),todo}]
    })
  }
  const handleRemoveTodo = (id)=>{
    console.log(id);
  }
  // useEffect(()=>{
  //   fetch('Todo.json').then(res=>res.json()).then(data=>setTodos(data))
  // },[])
  return (
    <div style={{height: "100vh"}} className='d-flex justify-content-center align-items-center bg-light flex-column'>
      <h1 className='text-center fw-bold mb-5'>To-Do App</h1>
      <NewTodo addToDo={handleAddToDo}/>
      <Todos todos={todos} onRemoveTodo = {handleRemoveTodo}/>
    </div>
  )
}