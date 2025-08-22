import React from "react";
import { useForm } from "react-hook-form";

function Huk() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="p-4 h-screen w-full">
        <form
          className="gap-10"
          onSubmit={handleSubmit((data) => console.log(data))}
          action=""
        >
          <input
            {...register("name")}
            className="font-semibold mr-4 rounded h-8 w-50 gap-10 text-center bg-cyan-200 text-black "
            type="text"
            name="name"
            placeholder="Please type your LinkedID"
          />
          <input
            {...register("email")}
            className="font-semibold mr-4 rounded h-8 w-50 gap-10 text-center bg-cyan-200 text-black "
            type="text"
            name="mail"
            placeholder="Enter ypur GitHubID"
          />
          <input
            className="bg-cyan-700 text-xl font-semibold font-sans text-white rounded w-25"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}

export default Huk;
