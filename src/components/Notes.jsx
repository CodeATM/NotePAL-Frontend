import React from "react";
import { FiTrash, FiEdit } from "react-icons/fi";

const Notes = () => {
  return (
    <div className="flex p-4 gap-2 flex-row lg:w-1/3 w-full">
      <div className="w-[100%] flex flex-col bg-white px-6 py-6 border-[2px] border-gray-200 rounded-lg hover:shadow-md">
        <div className="title flex justify-between items-center py-5">
          <h1 className="text-lg font-bold uppercase tracking-wide">
            Subject Title
          </h1>
          <div className="flex space-x-1 ">
            <FiEdit className="font-xl cursor-pointer hover:text-green-900" />
            <FiTrash className="font-xl cursor-pointer hover:text-green-900" />
          </div>
        </div>
        <div className="body flex-1">
          <p className="text-sm tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            nobis, aliquid id modi reprehenderit totam alias. Ratione hic id
            fugiat nobis eum eveniet fugit quos accusamus nulla adipisci quasi
            doloremque corporis esse aliquam quas suscipit quam atque, odio
            reprehenderit libero. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates, cum.
          </p>
        </div>
        <div className="details">
          <p className="float-right text-sm font-semibold">21 July, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
