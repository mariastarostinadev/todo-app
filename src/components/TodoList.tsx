import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";

export default function TodoList() {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();
  
  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center  text-[#967259] text-[18px] opacity-50 font-semibold">
          Start by adding a todo..
        </li>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={
            "flex justify-between items-center px-8 h-[60px] text-[18px] cursor-pointer border-b border-black/[8%]"
          }
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span
            className={`${
              todo.isCompleted ? "line-through text-[#967259]" : " "
            } `}
          >
            {todo.text}{" "}
          </span>

          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
