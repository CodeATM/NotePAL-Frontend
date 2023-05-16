import React, { useEffect, useState } from "react";
import Notes from "../components/Notes";
import { BiPlusCircle } from "react-icons/bi";
import Header from "../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import loader from "../assets/load.gif";
import axios from "axios";
import { FiTrash, FiEdit } from "react-icons/fi";
import { deleteNoteRoute, getNoteRoute } from "../Utils/APIRoutes";

const UserDashBoard = ({ setLoginModal }) => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("note-app-user")) {
      navigate("/login");
    }
  }, []);
  // useParams(id)

  useEffect(() => {
    const getNotes = async () => {
      const user = await JSON.parse(localStorage.getItem("note-app-user"));
      const results = await fetch(getNoteRoute, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const response = await results.json();
      if (results.ok) {
        console.log(response);
        setNotes(response);
        setIsLoading(false);
      } else {
        console.log(results.error);
      }
    };
    getNotes();
  }, []);

  const deleteNote = async (id) =>{
    const user = await JSON.parse(localStorage.getItem("note-app-user"));
    // try {
        if(user.token){
            await axios.delete(`http://localhost:8000/api/notes/${id}`, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            })
        }
        
//     } catch (err) {
// console.log(error)
//     }

}

  return (
    <>
      { isLoading ? (
        <div className="w-[100%] h-[100%] justify-center items-center flex">
          <img src={loader} alt="loader" className="max" />
        </div>
      ) : (
        <div className="h-full w-full">
          <div className=" container mx-auto my-12 overflow-hidden gap-10">
            <Header />
            <div className="flex flex-wrap pt-10">
              <div
                className="flex p-4 gap-2 flex-row lg:w-1/3 w-full h-64 cursor-pointer"
                onClick={() => setLoginModal(true)}
              >
                <div className="w-[100%] flex flex-col px-6 py-6 border-[2px] border-gray-200 rounded-xl bg-black text-white p-4 hover:bg-white hover:text-black trans">
                  <div className="flex flex-col justify-center items-center">
                    <BiPlusCircle className="font-bold text-7xl" />
                    <h2 className="text-2xl tracking-wide font-semibold">
                      Add Note
                    </h2>
                  </div>
                </div>
              </div>
              {notes?.map((note, i) => (
                <div
                  className="flex p-4 gap-2 flex-row lg:w-1/3 w-full flex-auto"
                  key={i}
                >
                  <div className="">
                    <div className="w-[100%] flex flex-col bg-white px-6 py-6 border-[2px] border-gray-200 rounded-lg hover:shadow-md ">
                      <div className="title flex justify-between items-center py-5">
                        <h1 className="text-lg font-bold uppercase tracking-wide">
                          {note.heading}
                        </h1>
                        <div className="flex space-x-1 ">
                          <FiEdit className="font-xl cursor-pointer hover:text-green-900" />
                          <FiTrash className="font-xl cursor-pointer hover:text-green-900" onClick={()=>{
                            deleteNote()
                          }}/>
                        </div>
                      </div>
                      <div className="body">
                        <p className="text-sm tracking-wide">{note.body}</p>
                      </div>
                      <div className="details">
                        <p className="float-right text-sm font-semibold">
                          21 July, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashBoard;
