import React from "react";
import { AiFillDelete } from 'react-icons/ai';
export const Todo = ({ todo }) => {
  return (
    <article style={{backgroundColor:"#222"}} className='rounded-3 p-2 m-2 d-flex justify-content-between align-items-center'>
      <div>
        <h3>{todo.title}</h3>
        <p className="opacity-50">{todo.desc}</p>
      </div>
      <div>
        <button  className="btn btn-danger"><AiFillDelete className="fs-5 me-1 mb-1" />Delete</button>
      </div>
    </article>
  );
};
