import React from "react";
import robot from "../assets/robot.gif";
import { Link } from "react-router-dom";

const Welcome = ({ setLoginModal }) => {
  return (
    <div>
      <div className="text text-center space-y-3">
        <h1 className="font-semibold text-black text-4xl tracking-widerer capitalize">
          Welcome to Note<spaan className="text-green-800 uppercase">pal</spaan>
        </h1>
        <p className="text-sm font-semibold capitalize">
          notepal is the number 1 integratd website for taking note annd making
          todolist. <br /> it is the most user friendly app to make note and
          seduling your day very easy.ite is very accessible. <br />
          enjoy the beauty of note it today{" "}
        </p>
        <Link to='/Login'>
          <div className="">
            <button className="text-white font-semibold text-md tracking-wider bg-green-900 px-5 py-1 rounded-sm">
              Get Started
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
