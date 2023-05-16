import React from "react";
import { Link } from 'react-router-dom';
import { TiFeather} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-2 h-full">
      <div className="flex items-center justify-center">
        <Link to="/">
          <div className="flex items-center space-x-5">
          <div className="logo flex space-x-1 items-center">
              <div className="text-lg text-green-900 ">
                <TiFeather className=""/>
              </div>
              <div className="text-sm tracking-wider font-semibold">
                Note<span className="font-bold text-green-700">PAL</span>
              </div>
            </div>
          </div>
        </Link>

        <p className="text-sm">&copy; 2023 <strong>NotePAL</strong> by Stringify.</p>
      </div>
    </div>
  );
};

export default Footer;