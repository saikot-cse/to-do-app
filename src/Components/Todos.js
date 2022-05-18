import React from 'react'
import { Todo } from './Todo'

export const Todos = ({todos}) => {
  return (
    <div>
      Todos:{todos.length}
      {
        todos.map(todo=><Todo key={todo._id} todo = {todo}/>)
      }
    </div>
  )
}
