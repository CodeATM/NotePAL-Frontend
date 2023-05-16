import React, { useState } from "react";
import { FiUser, FiLock, FiMail } from "react-icons/fi";
// import { FiLock } from "react-icons/all";
import { Link, useNavigate } from "react-router-dom";
import { TiFeather } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../Utils/APIRoutes";

const Register = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleInput = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const Validation = () => {
    // import the text from the input field for validation
    const { password, ConfirmPassword, name, email } = value;
    //state the condition for each field in the input
    if (password !== ConfirmPassword) {
      toast.error( "Password and Confirm Password should be same!", toastOptions
      );
      return false;
    } else if (name == "") {
      toast.error( "Please enter Name", toastOptions);
      return false;
    } else if (password.length < 5) {
      toast.error("Password must be more than 5 letters", toastOptions);
      return false;
    } else if (email == "") {
      toast.error("Please Enter your Email", toastOptions);
      return false;
    }
    return true;
  };

  const submit = async (event) => {
    event.preventDefault();
    // Validation()
    if (Validation()) {
      const { email, name, password } = value;

      
      const { data } = await axios.post(registerRoute, {
        name,
        email,
        password,
      });

      console.log(data)

      if (data.status === false ) {
        toast.error(data.msg, toastOptions);
      }

      if (data) {
        localStorage.setItem( "note-app-user", JSON.stringify(data));
      }
      navigate("/");
    }
  };

  return (
    <>
      <div className="h-full w-full flex items-center justify-center ">
        <div className="py-10 px-20 shadow-md space-y-6">
          <div className="">
            <div className="logo space-y-2 flex justify-center flex-col items-center">
              <div className="text-4xl text-green-900 ">
                <TiFeather />
              </div>
              <div className="text-3xl tracking-wider font-semibold">
                Note<span className="font-bold text-green-700">PAL</span>
              </div>
            </div>
            <div className="">
              <h1 className="text-sm font-semibold capitalize">
                Enter your details to get started
              </h1>
            </div>
          </div>
          <div className="space-y-4">
            <div className=" space-y-1">
              <div className="absolute text-lg -pb-0.5">
                <FiUser />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                min="3"
                onChange={(e) => handleInput(e)}
                className="w-full outline-none border-b-[1px] pl-7 text-sm  border-gray-300 bg-transparent"
              />
            </div>
            <div className=" space-y-1">
              <div className="absolute text-lg -pb-0.5">
                <FiMail />
              </div>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                min="3"
                onChange={(e) => handleInput(e)}
                className="w-full outline-none border-b-[1px] pl-7 text-sm  border-gray-300 bg-transparent"
              />
            </div>
            <div className=" space-y-1">
              <div className="absolute text-lg">
                <FiLock />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                min="3"
                onChange={(e) => handleInput(e)}
                className="w-full outline-none border-b-[1px] pl-7 text-sm  border-gray-300 bg-transparent"
              />
            </div>
            <div className=" space-y-1">
              <div className="absolute text-lg">
                <FiLock />
              </div>
              <input
                type="password"
                name="ConfirmPassword"
                placeholder="Confirm Password"
                min="3"
                onChange={(e) => handleInput(e)}
                className="w-full outline-none border-b-[1px] pl-7 text-sm  border-gray-300 bg-transparent"
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-between">
              <div className=" flex gap-x-1 items-center">
                <input type="checkbox" name="remember" id="" />
                <p className="font-semibold text-xs">Remember Me</p>
              </div>
              <div className="">
                <h1 className="text-xs text-green-900 font-semibold">
                  Forget Password
                </h1>
              </div>
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="">
              <button
                className="w-full py-1 px-2 bg-green-900 rounded-sm text-lg text-white tracking-wider"
                type="submit"
                onClick={(event) => submit(event)}
              >
                Create Account
              </button>
            </div>
            <p className="text-sm ">
              Dont Have an Account?
              <Link to="/Login" className="text-green-700 font-semibold">
                {" "}
                Sign in
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
