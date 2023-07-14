import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoUpdated } from "../store/features/todo/todoSlice";

const UpdateTodoForm = () => {
  const todoToUpdate = useSelector((state) => state.todos.todoUpdate);
  const [update, setUpdate] = useState(todoToUpdate.name);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(update)) {
      alert("Please enter a valid todo");
      setUpdate("");
      return;
    } else {
      dispatch(
        todoUpdated({
          id: todoToUpdate.id,
          name: update,
        })
      );
      setUpdate("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          type="text"
          className="border border-gray-300 p-2 rounded-lg w-full"
          placeholder="Update Todo"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateTodoForm;
