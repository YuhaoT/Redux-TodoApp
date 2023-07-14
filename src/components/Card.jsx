import AddTodoForm from "./AddTodoForm";
import SingleTodoCard from "./SingleTodoCard";
import UpdateTodoForm from "./UpdateTodoForm";
import { useSelector, useDispatch } from "react-redux";
import { todoCleared } from "../store/features/todo/todoSlice";

const Card = () => {
  const myTodos = useSelector((state) => state.todos.todos);
  const toggleForm = useSelector((state) => state.todos.toggleForm);
  const dispatch = useDispatch();

  return (
    <div className="w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2x1 rounded-lg p-2 items-center flex flex-col space-y-10 justify-between">
      <div className="flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
        <h1 className="text-3xl font-semibold underline">Todo List</h1>
        <div className="2-3/4">
          {toggleForm ? <AddTodoForm /> : <UpdateTodoForm />}
        </div>
        <div className="w-3/4">
          <ul className="space-y-3">
            {myTodos.map((todo) => (
              <li key={todo.id} className="mb-3">
                <SingleTodoCard id={todo.id} name={todo.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => dispatch(todoCleared())}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>
    </div>
  );
};

export default Card;
