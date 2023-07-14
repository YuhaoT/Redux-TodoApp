import { useState } from "react";
import { todoAdded } from "../store/features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const AddTodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert("Please enter a valid todo");
      setInput("");
      return;
    } else {
      dispatch(
        todoAdded({
          id: nanoid(),
          name: input,
        })
      );
      setInput("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="border border-gray-300 p-2 rounded-lg w-full"
          placeholder="Add Todo"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
