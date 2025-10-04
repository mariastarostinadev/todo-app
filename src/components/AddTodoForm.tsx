import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/hooks";

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState("");
  const { handleAddTodo } = useTodosContext();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#38220f]">Add to do</h2>
      <input
        type="text"
        className="h-[45px] border bg-[#ece0d1] border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[15px]"
        value={todoText}
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
