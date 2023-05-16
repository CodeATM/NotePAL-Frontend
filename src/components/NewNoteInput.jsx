import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const NewNoteInput = () => {
  return (
    <div className="w-48 h-48">
      <div className="border-[2px] rounded-md">
        <FiPlusCircle />
        <h1>Add Note</h1>
      </div>
    </div>
  );
};

export default NewNoteInput;
