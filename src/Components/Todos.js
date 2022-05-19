import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
  console.log(props);
  return (
    <section style={{height:"60vh", backgroundColor:"#333"}} className='w-50 overflow-scroll text-white rounded-3 p-2'>
      {
        props.todos.map(todo=><Todo key={todo.id} todo = {todo.todo} id={todo.id} onRemoveTodo = {props
          .onRemoveTodo}/>)
      }
    </section>
  )
}
