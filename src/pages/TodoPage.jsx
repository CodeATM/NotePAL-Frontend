import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import TodoInput from "../components/TodoInput";
import Todolist from "../components/Todolist";

const TodoPage = () => {
  const [todoInput, setTodoInput] = useState(false);
  return (
    <div className="h-full">
      <div
        className={`${
          todoInput ? "block" : "hidden"
        } transition-all absolute bottom-28 right-8 index`}
      >
        <TodoInput setTodoInput={setTodoInput} />
      </div>
      {/* <div className="">
        <TodoInput />
      </div> */}
      <div className="h-full w-full">
        <div className="container mx-auto py-10">
          <div className="heading flex md:flex-row flex-col justify-between items-center gap-4">
            <h1 className="text-center text-3xl font-semibold">
              Welcome Back,
              <span className="font-bold font-2xl text-green-900">
                Oluwatimileyin
              </span>
            </h1>
          </div>

          <div className="py-10 space-y-5">
            <Todolist />
            <Todolist />
            <Todolist />
            <Todolist />
            <Todolist />
            <Todolist />
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 right-4 cursor-pointer">
        <div
          className="bg-green-900 p-3 rounded-md text-2xl text-white"
          onClick={() => setTodoInput(true)}
        >
          <MdAdd />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
