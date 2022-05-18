import React from 'react'

export const Todo = ({todo}) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <article>{todo.desc}</article>
    </div>
  )
}
