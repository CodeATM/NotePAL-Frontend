import React from "react";
import Welcome from "../../components/Welcome";
// import robot from "../assets/robot.gif";
import { BsPhone } from "react-icons/bs";
import { BsShield } from "react-icons/bs";
import { FaUsers, } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { MdNewLabel } from "react-icons/md";
import { CgFormatBold } from "react-icons/cg";
import img1 from "../../assets/meeting.jpg";
import img4 from "../../assets/image.gif";
import img2 from "../../assets/wordpress.jpg";
import pic1 from "../../assets/pic-1.png";
import pic2 from "../../assets/pic-2.png";
import pic3 from "../../assets/pic-3.png";

const Home = ({ setLoginModal }) => {
  return (
    <>
      <div className=" container mx-auto flex justify-between mt-10 flex-col lg:flex-row text-center gap-4 items-center">
        <div className=" space-y-5 text-center lg:text-start lg:w-[45%] flex-1">
          <h1 className="text-black font-extrabold lg:text-6xl text-4xl md:text-4xl capitalize tracking-wide">
            A better way to keep track of all your important daily Events.
          </h1>
          <p className="text-gray-400 text-sm  tracking-widest">
            NotePal is an integrated tool that helps to user to take
            efficent and accurate note for personal and company events.
          </p>
          <button className="bg-green-800 px-5 py-1 font-semibold text-lg text-white tracking-wide rounded-md">
            Get Started
          </button>
        </div>

        <div className="lg:w-[45%] flex-1" >
            <img src={img4} alt=""className="  shadow-lg"/>
            </div>
        
      </div>
      {/* Features  */}

      <div className="container mx-auto">
        <div className="my-20 space-y-8">
          <div className="heading text-center">
            <h1 className="text-black font-bold trackin-wide text-3xl capitalize">Focus on what matters</h1>
            <p className="text-gray-500 tracking-wide text-md capitalize">Some of NotePAL key features</p>

          </div>
          <div className="flex flex-col md:flex-row justify-betwwen itemx-center gap-4">
            <div className=" flex flex-col items-center space-y-2 w-full md:w-1/3 bg-white p-3 shadow-md rounded-lg hover:border-[1px] border-green-400 transition-all">
              <div className="bg-green-700 p-3 rounded-full">
                <BsPhone className="text-white text-2xl" />
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-xl text-center text-black font-semibold dark:text-white">
                  Accessibility
                </h1>
                <p className="text-sm px-5">
                  Notepal is accesible in everywhere you go all you need is to
                  just login to your acount
                </p>
              </div>
            </div>
            {/*  */}

            <div className=" flex flex-col items-center space-y-2 w-full md:w-1/3 bg-white p-3 shadow-md rounded-lg hover:border-[1px] border-green-400 transition-all">
              <div className="bg-green-700 p-3 rounded-full">
                <BsShield className="text-white text-2xl" />
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-xl text-center text-black font-semibold dark:text-white">
                  Secure
                </h1>
                <p className="text-sm px-5">
                  Notepal is accesible in everywhere you go all you need is to
                  just login to your acount
                </p>
              </div>
            </div>

            {/*  */}

            <div className=" flex flex-col items-center space-y-2 w-full md:w-1/3 bg-white p-3 shadow-md rounded-lg hover:border-[1px] border-green-400 transition-all">
              <div className="bg-green-700 p-3 rounded-full">
                <FaUsers className="text-white text-2xl" />
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-xl text-center text-black font-semibold dark:text-white">
                  Open Sourced
                </h1>
                <p className="text-sm px-5">
                  Notepal is accesible in everywhere you go all you need is to
                  just login to your acount
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* best */}

      <div className="container mx-auto py-20 ">
      <div className="heading text-center flex flex-col justify-center items-center mb-10 ">
            <h1 className="text-black font-bold trackin-wide text-3xl capitalize">Your Daily solution</h1>
            <div className="flex justify-center items-center bg-green-600 h-[2px] w-[8rem]"></div>
          </div>
        <div className="flex flex-col gap-y-32">
          {/*  */}
          <div className="flex flex-col md:flex-row justify-between gap-x-10 relative gap-5 lg:text-start text-center items-center flex-1">w
            <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="font-bold text-3xl capitalize tracking-wide">ideas don't stay for long </h1>
              <p className=" text-sm font-semibold text-gray-400 tracking-wide">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt explicabo vero officia architecto animi. Magni, et! Hic ipsam nesciunt, aliquid rem aut, fugiat maxime necessitatibus culpa, corporis officia delectus adipisci?
              </p>
            </div>

            <div className="bg-white rounded-md flex px-10 py-3 shadow-md justify-between gap-x-8 w-[70%] items-center">
              <div className="flex space-x-3 items-center">
                <FiCalendar className=" text-xl text-green-400"/>
                <p className="text-gray-400 capitalize text-md font-semibold tracking-wide">
                  Remind
                </p>
              </div>

              <div className="flex space-x-3 items-center">
                <MdNewLabel className=" text-xl text-green-400"/>
                <p className="text-gray-400 capitalize text-md font-semibold tracking-wide">
                  Label
                </p>
              </div>
            </div>
            </div>
            <div className="" />
            <img src={img2} alt=""className=" w-[30rem] rounded-bl-3xl rounded-tr-3xl shadow-lg"/>
            </div>

            {/*  */}

            <div className="flex flex-col md:flex-row-reverse justify-between gap-x-10 relative gap-5 lg:text-start text-center items-center flex-1">
            <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="font-bold text-3xl capitalize tracking-wide">Easier and much better group work flow</h1>
              <p className=" text-sm font-semibold text-gray-400 tracking-wide">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt explicabo vero officia architecto animi. Magni, et! Hic ipsam nesciunt, aliquid rem aut, fugiat maxime necessitatibus culpa, corporis officia delectus adipisci?
              </p>
            </div>

            <div className="bg-white rounded-md flex px-10 py-3 shadow-md justify-between gap-x-8">
              <div className="flex space-x-3 items-center">
                <FiCalendar className=" text-xl text-green-400"/>
                <p className="text-gray-400 capitalize text-md font-semibold tracking-wide">
                  Remind
                </p>
              </div>

              <div className="flex space-x-3 items-center">
                <MdNewLabel className=" text-xl text-green-400"/>
                <p className="text-gray-400 capitalize text-md font-semibold tracking-wide">
                  Label
                </p>
              </div>

              <div className="flex space-x-3 items-center">
                <FaUsers className=" text-xl text-green-400"/>
                <p className="text-gray-400 capitalize text-md font-semibold tracking-wide">
                  community
                </p>
              </div>
            </div>
            </div>
            <div className="" />
            <img src={img1} alt=""className=" w-[30rem] rounded-bl-3xl rounded-tr-3xl shadow-lg"/>
            </div>
          </div>
          {/*  */}
      </div>


      {/* Testiminy */}

     <div className=" container mx-auto my-10">
     <div className="heading text-center flex flex-col justify-center items-center mb-10 gap-4">
            <h1 className="text-black font-bold trackin-wide text-3xl capitalize">Our user stories</h1>
            <div className="flex justify-center items-center bg-green-600 h-[2px] w-[8rem]"></div>
          </div>
      <div className=" flex gap-4  flex-col md:flex-row">


        <div className="rounded-md border-[1px] p-5 border-green-400 w-full md:w-1/3  shadow-green-300 shadow-sm">
          <div className="space-y-5">
            <div className="flex space-x-4">
              <img src={pic1} alt="" className="rounded-full w-12"/>
              <div className="space-y-2">
                <h1 className="text-black capitalize tracking-wide">
                  John Matthews
                </h1>
                <p className="text-green-400 text-sm">@MatthewJohn</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, enim! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur commodi ab facere corrupti quidem?
            </p>
          </div>
        </div>

        {/*  */}

        <div className="rounded-md border-[1px] p-5 border-green-400 w-full md:w-1/3   shadow-green-300 shadow-sm">
          <div className="space-y-5">
            <div className="flex space-x-4">
              <img src={pic3} alt="" className="rounded-full w-12"/>
              <div className="space-y-2">
                <h1 className="text-black capitalize tracking-wide">
                  Emmanuel Stokes
                </h1>
                <p className="text-green-400 text-sm">@Estokes</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, enim! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur commodi ab facere corrupti quidem?
            </p>
          </div>
        </div>

        <div className="rounded-md border-[1px] p-5 border-green-400 w-full md:w-1/3 shadow-green-300 shadow-sm">
          <div className="space-y-5">
            <div className="flex space-x-4">
              <img src={pic2} alt="" className="rounded-full w-12"/>
              <div className="space-y-2">
                <h1 className="text-black capitalize tracking-wide">
                  Emily Brads
                </h1>
                <p className="text-green-400 text-sm">@BradEM</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, enim! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur commodi ab facere corrupti quidem?
            </p>
          </div>
        </div>


      </div>

      <div className="flex items-center justify-center pt-6">
        <button className=" text-green-700 text-sm font-semibold capitalize tracking-wide">View more</button>
      </div>
     </div>


     <div className="text-center mt-20 mb-10 space-y-2">
         <div className="text-center">
          <h1 className="text-3xl font-bold capitalize tracking-wide ">Ready to Join The NotePAL community</h1>
          <p className="text-gray-400 text-sm">Click here to register and start experiencing NotePAL</p>
         </div>

        <button className="border-green-700 border-[1px] text-black px-7 py-1 rounded-3xl text-lg font-semibold capitalize tracking-wide hover:bg-green-700 hover:text-white shadow-sm">SignUp</button>

     </div>
    </>
  );
};

export default Home;
