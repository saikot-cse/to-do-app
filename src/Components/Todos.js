import React from 'react'
import { Todo } from './Todo'

export const Todos = ({todos}) => {
  return (
    <section style={{height:"60vh", backgroundColor:"#333"}} className='w-50 overflow-scroll text-white rounded-3 p-2'>
      {
        todos.map(todo=><Todo key={todo._id} todo = {todo}/>)
      }
    </section>
  )
}
