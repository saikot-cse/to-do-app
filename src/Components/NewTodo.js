import React from "react";
import { useForm } from "react-hook-form";

export const NewTodo = ({ addToDo }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    addToDo(data);
    reset();
  };
  return (
    <form style={{ backgroundColor: "#333" }} className="w-50 m-2 p-2 rounded-3 text-white" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="d-block mx-auto w-50 mb-2" htmlFor="name">
          Title:
        </label>
        <input className="border-0 p-1 rounded-3 d-block mx-auto w-50 mb-3" {...register("title")} />
      </div>
      <div>
        <label className="d-block mx-auto w-50 mb-2" htmlFor="name">
          Description:
        </label>
        <input type="textarea" className="border-0 p-1 rounded-3 d-block mx-auto w-50 mb-3" {...register("desc")} />
      </div>
      <input className="btn btn-warning d-block mx-auto w-25 text-white fw-bolder" type="submit" />
    </form>
  );
};
