import React, { useState } from "react";
import robot from "../assets/robot.gif";
import { MdOutlineCancel } from "react-icons/md";
import { BiPen } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { addNoteRoute } from "../Utils/APIRoutes";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ setLoginModal }) => {
  const navigate = useNavigate()
  const [note, setNote] = useState({
    heading: "",
    body: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };


  const handleContent = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };


  const submit = async (event) => {
    event.preventDefault();

    const user = await JSON.parse(localStorage.getItem("note-app-user"));
    //  console.log(user.token)
    try {
      const { heading, body } = note;
      console.log(note)

      const { data } = await axios.post(addNoteRoute, note,{
        headers: {
          "Authorization": `Bearer ${user.token}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      console.log(data);
      setLoginModal(false)

    } catch (err) {
      console.log(err.message);
    }
  };
  

  return (
    <>
      <div className="absolute right-6 top-6 text-3xl cursor-pointer">
        <MdOutlineCancel onClick={() => setLoginModal(false)} />
      </div>
      <div className="h-full w-full flex items-center justify-center ">
        <div className="">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-black text-lg font-semibold tracking-wider">
                Title
              </p>
              <input
                type="text"
                name="heading"
                placeholder="Enter Heading"
                className="px-2 py-2 text-md outline-none shadow-lg w-full"
                onChange={(e) => handleContent(e)}
              />
            </div>
            <div className="space-y-2">
              <p className="text-black text-lg font-semibold tracking-wider">
                Body
              </p>
              <textarea
                name="body"
                id=""
                cols="30"
                rows="10"
                className="w-full outline-none p-2 text-sm"
                onChange={(e) => handleContent(e)}
              ></textarea>
            </div>
          </div>
          <div className="mt-4 item-center">
            <button
              className="py-2 px-8 rounded-md bg-green-900 text-white font-semibold text-xl tracking-wide flex items-center space-x-3"
              onClick={(event) => submit(event)}
            >
              <span>
                <BiPen />
              </span>
              Add Text
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginModal;
