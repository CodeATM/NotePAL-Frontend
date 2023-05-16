import React, { useState } from "react";
import { FiChevronDown, FiHeart, FiChevronUp } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const TodoInput = ({ setTodoInput }) => {
  const [location, setLocation] = useState(false);
  const [priority, setPriority] = useState(false);

  return (
    <div className="h-full w-full flex items-center justify-center bg-white">
      <div className="absolute right-6 top-6 text-xl cursor-pointer">
        <MdOutlineCancel onClick={() => setTodoInput(false)} />
      </div>
      <div className="py-20 px-14 shadow-lg space-y-6">
        <div className="heading">
          <h1 className="font-bold text-2xl tracking-wide text-center">
            Add To-Do
          </h1>
        </div>

        {/* input section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="font-semibold text-md text-gray-600 tracking-wide">
              To-Do
            </p>
            <input
              type="text"
              // name="text"
              placeholder="Enter To-Do"
              min="3"
              //   onChange={(e) => handleChange(e)}
              className="w-full outline-none border-[1px] text-sm  border-gray-300 bg-transparent py-1 px-3 rounded-sm"
            />
          </div>

          {/* location */}
          <div className="relative w-full">
            <p className="font-semibold text-md text-gray-600 tracking-wide">
              Location:
            </p>
            <div className="flex items-center">
              <input
                type="text"
                name="Password"
                placeholder="location"
                min="3"
                //   onChange={(e) => handleChange(e)}
                className="w-full outline-none border-[1px] text-sm  border-gray-300 bg-transparent py-1 px-3 rounded-md"
              />
              <div className="-ml-8">
                {location ? (
                  <FiChevronUp
                    className="text-xl"
                    onClick={() => setLocation(false)}
                  />
                ) : (
                  <FiChevronDown
                    className="text-xl"
                    onClick={() => setLocation(true)}
                  />
                )}
              </div>
            </div>

            <div
              className={`${
                location ? "block" : "hidden"
              } transition-all index shadow-md py-1 absolute w-full`}
            >
              <ul className="bg-white mt-1 space-y-2 px-2 py-1 capitalize text-sm">
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setLocation(false)}
                >
                  Home
                </li>
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setLocation(false)}
                >
                  School
                </li>
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setLocation(false)}
                >
                  Work
                </li>
                <li
                  className=" cursor-pointer"
                  onClick={() => setLocation(false)}
                >
                  Others
                </li>
              </ul>
            </div>
          </div>

          <div className="relative w-full">
            <p className="font-semibold text-md text-gray-600 tracking-wide">
              Priority:
            </p>
            <div className="flex items-center">
              <input
                type="text"
                name="Password"
                placeholder="Priority"
                min="3"
                //   onChange={(e) => handleChange(e)}
                className="w-full outline-none border-[1px] text-sm  border-gray-300 bg-transparent py-1 px-3 rounded-sm"
              />
              <div className="-ml-8">
                {priority ? (
                  <FiChevronUp
                    className="text-xl"
                    onClick={() => setPriority(false)}
                  />
                ) : (
                  <FiChevronDown
                    className="text-xl"
                    onClick={() => setPriority(true)}
                  />
                )}
              </div>
            </div>

            <div
              className={`${
                priority ? "block" : "hidden"
              } transition-all index shadow-md py-1 absolute w-full`}
            >
              <ul className="bg-white mt-1 space-y-2 px-2 py-1 capitalize text-sm">
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setPriority(false)}
                >
                  High
                </li>
                <li
                  className="border-b-[1px] cursor-pointer"
                  onClick={() => setPriority(false)}
                >
                  Medium
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => setPriority(false)}
                >
                  Low
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* submit section */}
        <div className="text-center space-y-2">
          <div className="space-y-3">
            <button
              className="w-full py-1 px-2 bg-green-800 rounded-sm text-md text-white tracking-wider rounded-md"
              type="submit"
              //   onClick={(event) => handleSubmit(event)}
            >
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
