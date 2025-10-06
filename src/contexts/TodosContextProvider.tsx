import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);



export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  //state
  const [todos, setTodos] = useState<Todo[]>([]);

  //derived state
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  //event handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Please log in to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //side effects

  // //fetching data from url, runs after render
  useEffect(()=>{
    const fetchTodos = async ()=>{
      const response = await fetch("https://bytegrad.com/course-assets/api/todos");
      const todos = await response.json();
      setTodos(todos);
    };
    fetchTodos();
  },[])
  

 

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
