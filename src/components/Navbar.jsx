import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiFeather } from "react-icons/ti";
import { FiMoon, FiSun } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const Navbar = ({ setDarkMode, darkMode }) => {
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!localStorage.getItem("note-app-user")) {
  //     navigate("/login");
  //   }
  // }, []);

  const logout = () => {
    localStorage.clear()
    navigate("/");
  }

  const user = JSON.parse(localStorage.getItem("note-app-user"));

  return (
    <div className=" dark:bg-gray-700">
      <div className="container mx-auto">
        <div className="py-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <div className="logo flex space-x-1 items-center cursor-pointer">
                <div className="text-3xl text-green-900 ">
                  <TiFeather className="" />
                </div>
                <div className="text-xl tracking-wider font-semibold dark:text-white">
                  Note<span className="font-bold text-green-700">PAL</span>
                </div>
              </div>
            </Link>
            <div className="flex space-x-3 items-center">
              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="font-semibold text-md capitalize">
                   {user.name}
                  </div>
                   <FiLogOut className="text-xl" onClick={() => {
                    logout()
                   }}/>
                </div>
              ) : (
                <div className="">
                  <Link to="/login">
                    <div className="btns flex space-x-3 items-center">
                      <button className="text-md py-1 px-3 rounded-3xl border-[2px] border-green-600 text-green-700 capitalize tracking-wider font-semibold cursor-pointer">
                        Sign in
                      </button>
                    </div>
                  </Link>
                </div>
              )}

              {/* <Link to="/login">
                <div className="btns flex space-x-3 items-center">
                  <button className="text-md py-1 px-3 rounded-3xl border-[2px] border-green-600 text-green-700 capitalize tracking-wider font-semibold cursor-pointer">
                    Sign in
                  </button>
                </div>
              </Link> */}
              {darkMode ? (
                <FiSun
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl text-white"
                />
              ) : (
                <FiMoon
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl text-black"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    // // const navigate = useNavigate();
    // // const handleClick = async () => {
    // //   const id = await JSON.parse(
    // //     localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    // //   )._id;
    // //   const data = await axios.get(`${logoutRoute}/${id}`);
    // //   if (data.status === 200) {
    // //     localStorage.clear();
    // //     navigate("/login");
    // //   }
    // // };
    // // return (
    // //   <Button onClick={handleClick}>
    // //     <BiPowerOff />
    // //   </Button>
    // // );
    // }
  );
};

export default Navbar;
