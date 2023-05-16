import React, {useEffect}from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {

  const user = JSON.parse(localStorage.getItem("note-app-user"));
  
  return (
    <div className="heading flex md:flex-row flex-col justify-between items-center gap-4">
      <h1 className="text-center text-3xl font-semibold">
        Hello,
        <span className="font-bold font-2xl text-green-900 capitalize">
          {" "}
          {user.name}
        </span>
      </h1>
      
    </div>
  );
};

export default Header;
