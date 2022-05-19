import React from "react";
import { AiFillDelete } from 'react-icons/ai';
import { MdOutlineDownloadDone } from 'react-icons/md';
export const Todo = (props) => {
  const {title,desc} = props.todo;
  const {id} = props;
  const handleDelete = (id)=>{
    console.log(id);
  }
  return (
    <article style={{backgroundColor:"#222"}} className='rounded-3 p-2 m-2 d-flex justify-content-between align-items-center'>
      <div>
        <h3>{title}</h3>
        <p className="opacity-50">{desc}</p>
      </div>
      <div>
        <button  className="btn btn-success me-2"><MdOutlineDownloadDone className="fs-5 me-1 mb-1" />Complete</button>
        <button onClick={()=>handleDelete(id)}  className="btn btn-danger"><AiFillDelete className="fs-5 me-1 mb-1" />Delete</button>
      </div>
    </article>
  );
};
