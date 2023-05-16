import React from "react";
import { FiTrash } from "react-icons/fi";

const Todolist = () => {
  return (
    <div>
      <div className="bg-gray-100 hover:shadow-md w-full py-3 px-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-start justify-start">
            <div className="">
              <input type="checkbox" name="" id="" className="bg-green-900" />
            </div>
            <div className="text-space-y-2">
              <div className="">
                <h1 className="text-xl font-semibold tracking-wide">
                  Buy New Shoes
                </h1>
                <h3 className="text-md font-semibold">Supermarket</h3>
              </div>
            </div>
          </div>
          <div className="space-x-4 flex justify-end items-center">
            <p className="p-1 px-2 text-sm font-bold bg-green-200">Low</p>
            <FiTrash className="text-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
